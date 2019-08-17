import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const header = React.memo( props => {
  return (
     <div>
     <div className="container">
			<div className="row">
				
				<div className="col-md-2 text-center">
					<span style={{color: "#68d1ef" , fontWeight: "600", fontSize: "20px"}}>Atmolit</span>
				</div>

				<div className="col-md-8 text-center">
					<a href="#">

                  <FontAwesomeIcon icon="plus-circle" color="#68d1ef" size="md"/>
               </a>

					<a href="#">
                  <FontAwesomeIcon icon="bell" color="#68d1ef" size="md" />
               </a>

					<a href="#">

                  <FontAwesomeIcon icon="user" color="#68d1ef" size="md"/>
               </a>

               <a href="#">

                  <FontAwesomeIcon icon="sign-in-alt" color="#68d1ef" size="md"/>
               </a>
				</div>

				<div className="col-md-2 text-center">
				</div>
		    
			</div>
		</div>
     </div>
  	)
});
export default header;