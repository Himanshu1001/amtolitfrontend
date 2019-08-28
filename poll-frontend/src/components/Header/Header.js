import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const header = React.memo(props => {
  return (
    <div>
      <div className="container">
        <div
          className="row"
          style={{
            paddingTop: "20px",
            backgroundColor: "#000",
            height: "120px"
          }}
        >
          <div className="col-md-2 text-center">
            <span
              style={{ color: "#ffffff", fontWeight: "600", fontSize: "20px" }}
            >
              Atmolit
            </span>
          </div>

          <div className="col-md-8 text-center">
            <span
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
            </span>

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

            <span
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
            </span>

            <span
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "20px",
                marginLeft: "15px"
              }}
            >
              <a href="#">Login</a>
            </span>
          </div>

          <div className="col-md-2 text-center" />
        </div>
      </div>
    </div>
  );
});
export default header;
