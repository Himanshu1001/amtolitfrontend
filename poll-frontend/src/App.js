import React from 'react';
import Layout from "./containers/Layout/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faPlusCircle, faSignInAlt, faCopyright} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div >
      <Layout/>
    </div>
  );
}

library.add( faBell, faUser, faPlusCircle, faSignInAlt, faCopyright )

export default App;
