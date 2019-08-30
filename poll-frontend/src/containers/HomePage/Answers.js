import React, { Fragment, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert";
import Textarea from "../../components/Textarea";

const Answers = ({ questionId }) => {
  const [answer, setAnswer] = useState("");
  const [addAnswer, setAddAnswer] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleShowAnswers = async () => {
    console.log("questionsId", questionId);
    let { data } = await axios.get(
      `http://localhost:8000/answer/?poll=${questionId}`
    );

    if (showAnswers) {
      return setShowAnswers(false)
    }

    setAnswers(data);
    
    setShowAnswers(true);
    if (!data.length)
      setTimeout(() => {
        setShowAnswers(false);
      }, 2000);
  };

  const handleAddAnswer = () => {
   addAnswer> 0 ?  setAddAnswer(0):  setAddAnswer(1);
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
      <div className="Button--wrapper">
        <Button type="button" onClick={handleShowAnswers}>
          Show Answers
        </Button>
        <Button type="button" onClick={handleAddAnswer}>
          Answer
        </Button>
      </div>

      {addAnswer === 2 ? (
        <Alert>
          Your answer will be displayed after approval from the admin
        </Alert>
      ) : (
        ""
      )}

      {addAnswer === 1 ? (
        <form onSubmit={handleAnswerSubmit}>
          <Textarea
            onChange={({ target }) => setAnswer(target.value)}
            value={answer}
          ></Textarea>
          <Button type="submit">Submit</Button>
        </form>
      ) : (
        ""
      )}

      {showAnswers && answers && answers.length ? (
        <Fragment>
          <p className="heading">Answers</p>
          {answers.map(v => (
            <div key={v.id} className="Answer">
              {v.answer}
            </div>
          ))}
        </Fragment>
      ) : showAnswers &&(
        <Alert>
          No answers yet
        </Alert>
      )}
    </Fragment>
  );
};

export default Answers;
