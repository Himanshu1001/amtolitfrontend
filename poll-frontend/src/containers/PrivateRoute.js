import React from "react";
import { Route, Redirect } from "react-router-dom";

// Components
// import LeftSection from "./Main/LeftSection";
// import RightSection from "./Main/RightSection";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <div
            className="content Main"
            style={{
              width: "100%",
              height: "auto",
              paddingBottom: "25px",
              marginTop: "100px"
            }}
          >
            {/* <LeftSection />
            <RightSection>
              <Component {...props} />
            </RightSection> */}
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
