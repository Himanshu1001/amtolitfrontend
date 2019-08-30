import React from "react";
// import { Redirect } from "react-router-dom";

// helper
// import { getCookie } from "../../helper";

// Components
import QuestionsList from "./QuestionsList";
import Header from "../../components/Header/Header";

const Home = props => {
  // if (!getCookie("auth")) return <Redirect to="/login" />;

  return (
    <div className="Home">
      <Header />
      <QuestionsList />
    </div>
  );
};

export default Home;
