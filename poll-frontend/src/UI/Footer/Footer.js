import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footer = props => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center">
            <span
              style={{
                color: "#68d1ef",
                position: "fixed",
                fontWeight: "600",
                fontSize: "14px",
                marginRight: "15px",
                textAlign: "center",
                backgroundColor: "white",
                height: "55px",
                right: "0",
                left: "0",
                bottom: "0",
                lineHeight: "55px"
              }}
            >
              <a href="#">
                <FontAwesomeIcon icon="copyright" color="#68d1ef" size="md" />
                Amtolit-2019
              </a>
              <a href="#" style={{ paddingLeft: "35px" }}>
                Made with love in India
              </a>
            </span>
          </div>

          <div className="col-md-2 text-center" />
        </div>
      </div>
    </div>
  );
};

export default footer;
