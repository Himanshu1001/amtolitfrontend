import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

// COmponents
import QuestionBlock from "../../components/QuestionBlock";
import Choice from "../../components/Choice";

import "./QuestionBlock.scss";

const QuestionsListItem = ({ item }) => {
  const [polls, setPolls] = useState([]);

  const fetchOptions = async id => {
    let { data } = await axios.get(`http://localhost:8000/choice/?poll=${id}`);
    console.log("poll data:::", data);

    setPolls(data);
  };

  useEffect(() => {
    if (item.poll_type === 0) {
      fetchOptions(item.id);
    }
  }, []);

  return (
    <QuestionBlock className="QuestionBlock">
      <div className="QuestionBlock_question-details">
        <img
          className="profile-img"
          src={item.poll_image}
          alt={item.question_text}
        />
        <span className="username">
          {item.anonymous_user ? "Anonymous" : ""}
        </span>
        <span className="separator">•</span>
        <span className="timestamp">
          {moment(item.created_at).format("ll")}
        </span>
      </div>
      <div className="QuestionBlock_question">{item.question_text}</div>

      <div className="QuestionBlock_choice">
        {polls && polls.length > 0
          ? polls.map(v => (
              <div key={v.id}>
                <span className="Choice">{v.choice_text}</span>
                <span className="">{}</span>
              </div>
            ))
          : ""}
      </div>
    </QuestionBlock>
  );
};

export default QuestionsListItem;
