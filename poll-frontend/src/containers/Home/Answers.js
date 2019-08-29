import React, { Fragment, useState } from "react";
import axios from "axios";

const Answers = ({ questionId }) => {
  const [answer, setAnswer] = useState("");
  const [addAnswer, setAddAnswer] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleShowAnswers = async () => {
    console.log("questionsId", questionId);
    let { data } = await axios.get(
      `http://localhost:8000/answer/?poll=${questionId}`
    );

    setAnswers(data);
  };

  const handleAddAnswer = () => {
    setAddAnswer(1);
  };

  const handleAnswerSubmit = async e => {
    e.preventDefault();

    let { data } = await axios.post(`http://localhost:8000/answer/`, {
      answer,
      approved: false,
      poll: questionId
    });

    setAddAnswer(2);

    setTimeout(() => {
      setAddAnswer(0);
    }, 2000);
  };

  return (
    <Fragment>
      <button type="button" onClick={handleShowAnswers}>
        Show Answers
      </button>
      <button type="button" onClick={handleAddAnswer}>
        Answer
      </button>

      {addAnswer === 2 ? (
        <p>Your answer will be displayed after approval from the admin</p>
      ) : (
        ""
      )}

      {addAnswer === 1 ? (
        <form onSubmit={handleAnswerSubmit}>
          <textarea
            onChange={({ target }) => setAnswer(target.value)}
            value={answer}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      ) : (
        ""
      )}

      {answers && answers.length
        ? answers.map(v => (
            <div key={v.id} className="Answer">
              {v.answer}
            </div>
          ))
        : ""}
    </Fragment>
  );
};

export default Answers;
