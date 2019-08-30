// import { verify } from "jsonwebtoken";
import axios from "axios";

export const setCookie = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = cname => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const deleteCookie = cname => {
  let d = new Date(0);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "='';" + expires + ";path=/";
};

export const decodeToken = async (token, cb) => {
  // verify(token, "s3cr3t", (err, decoded) => {
  //   if (err) return console.log(err);
  //   return cb(decoded);
  // });
  // axios.post();
};
