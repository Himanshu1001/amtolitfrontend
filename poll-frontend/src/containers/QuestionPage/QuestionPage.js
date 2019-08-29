import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionsListItem from "../HomePage/QuestionsListItem";

const QuestionPage = ({ match }) => {
  const [question, setQuestion] = useState({});

  const fetchQuestion = async questionId => {
    let { data } = await axios.get(
      `http://localhost:8000/polls/${questionId}/`
    );

    console.log("data:::", data);

    setQuestion(data);
  };

  useEffect(() => {
    const { questionId } = match.params;

    if (questionId) {
      fetchQuestion(questionId);
    }
  }, []);

  return question && Object.keys(question).length !== 0 ? (
    <QuestionsListItem item={question} />
  ) : (
    ""
  );
};

export default QuestionPage;
