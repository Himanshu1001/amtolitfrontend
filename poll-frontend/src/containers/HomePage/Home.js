import React from "react";
// import { Redirect } from "react-router-dom";

// helper
// import { getCookie } from "../../helper";

// Components
import QuestionsList from "./QuestionsList";
import Header from "../../components/Header/Header";
import Footer from "../../UI/Footer/Footer"
import CreatePoll from "../CreatePoll/CreatePoll"

const Home = props => {
  // if (!getCookie("auth")) return <Redirect to="/login" />;

  return (
    <div className="Home">
      <Header />
      <CreatePoll />
      <QuestionsList />
      <Footer />

    </div>
  );
};

export default Home;
