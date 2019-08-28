import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faPlusCircle,
  faSignInAlt,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";

// Components
import Routing from "./containers/Routing";
import Layout from "./containers/Layout/Layout";

// CSS
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routing />
        {/* <Layout /> */}
      </div>
    </Router>
  );
};

library.add(faBell, faUser, faPlusCircle, faSignInAlt, faCopyright);

export default App;
