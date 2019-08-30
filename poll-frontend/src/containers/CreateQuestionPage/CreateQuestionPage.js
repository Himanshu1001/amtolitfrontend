import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

// config
import config from "../../config";
import { getCookie } from "../../helper";

import Textarea from "../../components/Textarea";
import Button from "../../components/Button/Button";
import Mcq from "./Mcq";

// CSS
import "./CreateQuestion.scss";
const CreateQuestionPage = params => {
  const [questionData, setQuestionData] = useState({
    question_text: "",
    poll_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnlq_ULfQCgyOG7-2umjBD5ZrCvj3nl09oanM3Ue-lMrMfLZo5",
    poll_type: 1
  });
  const [anonymous, setAnonymous] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  const [choices, setChoices] = useState([]);
  const [choice, setChoice] = useState("");

  const handleQueChange = ({ target }) => {
    let { name, value } = target;

    if (name === "poll_type") value = Number(value);
    setQuestionData({ ...questionData, [name]: value });
  };

  const handleChange = ({ target }) => {
    let { name, value } = target;

    console.log({ name, value });

    if (name === "anonymous") {
      setAnonymous(!anonymous);
    }

    if (name === "isPublic") {
      setIsPublic(!isPublic);
    }
  };

  const sendChoices = async choice => {
    console.log("choice::::", choice);

    let { data } = await axios.post(`${config.API_URL}/choice/`, choice);

    console.log("response choice::::", data);
  };

  const sendQuestionData = async questionData => {
    console.log("send question data:::", questionData);

    let { data } = await axios.post(`${config.API_URL}/polls/`, questionData);

    console.log("response questinData::::", data);

    choices.forEach(v => {
      sendChoices({ poll: data.id, choice_text: v.value });
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let _questionData = {
      ...questionData,
      anonymous_user: anonymous,
      public: isPublic,
      user: JSON.parse(getCookie("auth")).id
    };

    sendQuestionData(_questionData);

    window.location.href = "/";
  };

  if (!getCookie("auth")) return <Redirect to="/login" />;

  return (
    <div className="root-container">
      <div className="inner-container">
        <div className="header">Create Question</div>
        <form onSubmit={handleSubmit}>
          <Textarea
            name="question_text"
            className="login-input"
            value={questionData.question_text}
            onChange={handleQueChange}
          ></Textarea>
          <div>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">Poll Type</label>
            <select
              className="poll-type"
              name="poll_type"
              defaultValue="1"
              onChange={handleQueChange}
            >
              {/* <option value="" defaultChecked disabled>
              Choose Poll Type
            </option> */}
              <option value="0">MCQ</option>
              <option value="1" defaultChecked>
                Text Based
              </option>
            </select>
          </div>

          {questionData.poll_type === 0 ? (
            <Mcq
              choice={choice}
              choices={choices}
              setChoice={setChoice}
              setChoices={setChoices}
            />
          ) : (
            ""
          )}

          <div>
            <input
              id="anonymous"
              type="checkbox"
              name="anonymous"
              checked={anonymous}
              onChange={handleChange}
            ></input>
            <label htmlFor="anonymous">Anonymous</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="isPublic"
              checked={isPublic}
              onChange={handleChange}
            ></input>
            <label htmlFor="isPublic">Public</label>
          </div>

          <Button className="login-btn" type="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuestionPage;
