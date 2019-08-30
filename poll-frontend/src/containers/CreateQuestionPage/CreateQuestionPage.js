import React, { useState } from "react";
import axios from "axios";

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

  return (
    <div className="CreateQuestion">
      <h3>Create Question</h3>
      <form onSubmit={handleSubmit}>
        <Textarea
          name="question_text"
          value={questionData.question_text}
          onChange={handleQueChange}
        ></Textarea>
        <input type="file" />
        <div>
          <label htmlFor="">Poll Type</label>
          <select name="poll_type" defaultValue="1" onChange={handleQueChange}>
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

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default CreateQuestionPage;
