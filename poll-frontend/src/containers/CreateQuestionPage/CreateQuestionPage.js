import React, { useState } from "react";

import Textarea from "../../components/Textarea";

// CSS
import "./CreateQuestion.scss";
import Button from "../../components/Button/Button";

const CreateQuestionPage = params => {
  const [questionData, setQuestionData] = useState({
    question_text: "",
    poll_image: "",
    poll_type: 1
  });
  const [anonymous, setAnonymous] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

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

  const handleSubmit = e => {
    e.preventDefault();

    console.log("dataL:::", { ...questionData, anonymous, isPublic });
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
            {/* <option value="" defaultChecked disabled>
              Choose Poll Type
            </option> */}
            <option value="0">MCQ</option>
            <option value="1" defaultChecked>
              Text Based
            </option>
          </select>
        </div>

        {questionData.poll_type === 0 ? <p>MCQ</p> : ""}

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
