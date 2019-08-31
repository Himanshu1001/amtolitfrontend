import React from "react";
// import { Redirect } from "react-router-dom";

// helper
// import { getCookie } from "../../helper";

// Components

import Header from "../../components/Header/Header";
import Footer from "../../UI/Footer/Footer"
import CreateQuestionPage from "../CreateQuestionPage";


const CreateQuestionFullPage = props => {
  // if (!getCookie("auth")) return <Redirect to="/login" />;

  return (
    <div className="Home">
      <Header />
      <CreateQuestionPage />
      <Footer />

    </div>
  );
};

export default CreateQuestionFullPage;
