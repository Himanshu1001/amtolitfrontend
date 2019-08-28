import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

// Pages
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

const BaseContainer = () => {
  const routes = [
    {
      isPrivate: false,
      path: "/",
      exact: true,
      component: withRouter(Home)
    },
    {
      isPrivate: false,
      path: "/register",
      exact: true,
      component: withRouter(Register)
    },
    {
      isPrivate: false,
      path: "/login",
      exact: true,
      component: withRouter(Login)
    },
    //   {
    //     isPrivate: false,
    //     path: "/login",
    //     exact: true,
    //     component: withRouter(Login)
    //   },

    {
      isPrivate: true,
      forPublisher: true,
      path: "*",
      component: withRouter(() => <p>401</p>)
    }
  ];

  return (
    <React.Fragment>
      {/* <Nav /> */}
      <Switch>
        {routes.map((route, index) => {
          if (!route.isPrivate) {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          } else {
            // return (
            //   <PrivateRoute
            //     key={index}
            //     path={route.path}
            //     exact={route.exact}
            //     isPrivate={route.isPrivate}
            //     component={route.component}
            //   />
            // );
          }
        })}
      </Switch>
    </React.Fragment>
  );
};

export default BaseContainer;
