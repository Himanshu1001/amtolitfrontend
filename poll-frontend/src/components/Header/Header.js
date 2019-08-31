import React  from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteCookie } from "../../helper";
import {Link} from "react-router-dom";

const header = React.memo(props => {
  const handleLogout = () => {
    deleteCookie("auth");
    window.location.href = "/login";
  };

  

  return (
    <div>
      <div>
        <div
          className="row headerShadow"

          style={{
            backgroundColor: "#fff",
            height: "64px",
              borderBottom: '1px solid #70a1ff'
          }}
        >

          <div className="col-md-2" style={{paddingLeft:'2%' , display: 'flex', alignItems: 'center'}}>
              <Link to={'/'}  style = {{color: 'inherit'}}>
                <span
                  style={{ color: "#70a1ff", fontWeight: "600", fontSize: "20px" }}>
                  Atmolit
                </span>
              </Link>
          </div>

          <div className="col-md-10" style={{paddingRight:'2%',textAlign:'end', display: 'flex', alignItems: 'center', justifyContent:'flex-end'}}>
            {/* <span
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "20px",
                marginRight: "15px"
              }}
            >
              <a href="#">
                <FontAwesomeIcon icon="plus-circle" color="#ffffff" size="md" />
              </a>
            </span> */}

            {/* <span
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "20px",
                marginRight: "15px"
              }}
            >
              <a href="#">
                <FontAwesomeIcon icon="bell" color="#ffffff" size="md" />
              </a>
            </span> */}

            {/* <span
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "20px",
                marginRight: "15px"
              }}
            >
              <a href="#">
                <FontAwesomeIcon icon="user" color="#ffffff" size="md" />
              </a>
            </span> */}
              <Link to={'/login'}  style = {{color: 'inherit'}}>
                <span
                  style={{
                    color: "#ffffff",
                    fontWeight: "600",
                    fontSize: "20px",
                    marginLeft: "15px"
                  }}
                >
                  <a href="#" className='login'>Login</a>
                </span>
            </Link>

            <span
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "20px",
                marginLeft: "15px"
              }}
              onClick={handleLogout}
            >
              <a href="#" className="login">Logout</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default header;

