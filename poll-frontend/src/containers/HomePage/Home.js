import React from "react";

// Components
import QuestionsList from "./QuestionsList";

const Home = props => {
  return (
    <div className="Home">
      <h2>Home</h2>

      <QuestionsList />
    </div>
  );
};

export default Home;
