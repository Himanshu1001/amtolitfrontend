import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

// Pages
import Home from "./HomePage";
import Register from "./Register";
import Login from "./Login";
import QuestionPage from "./QuestionPage";
// import CreateQuestionPage from "./CreateQuestionPage";
import CreateQuestionFullPage from "./CreateQuestionFullPage/CreateQuestionFullPage"
import CreatePoll from "../containers/CreatePoll/CreatePoll"

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
      path: "/question/:questionId",
      exact: true,
      component: withRouter(QuestionPage)
    },

    {
      isPrivate: false,
      path: "/create-question",
      exact: true,
      component: withRouter(CreateQuestionFullPage)
    },
    {
      isPrivate: false,
      path: "/create-poll",
      exact: true,
      component: withRouter(CreatePoll)
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
