import React, { Fragment, useState, useEffect } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon
} from "react-share";
import axios from "axios";
import moment from "moment";

// Config
import config from "../../config";

// COmponents
import QuestionBlock from "../../components/QuestionBlock";
import Polls from "./Polls";
import Answers from "./Answers";

import "./QuestionBlock.scss";

const QuestionsListItem = ({ item }) => {
  const [polls, setPolls] = useState([]);
  const [user, setUser] = useState(null);

  console.log("item:::::", item);

  const fetchOptions = async id => {
    let { data } = await axios.get(`http://localhost:8000/choice/?poll=${id}`);
    console.log("poll data:::", data);

    setPolls(data);
  };

  const fetchUser = async id => {
    let { data } = await axios.get(`http://localhost:8000/user/${id}/`);
    console.log("poll data:::", data);

    setUser(data.user);
  };

  useEffect(() => {
    console.log("using efffect");

    fetchUser(item.user);

    if (item.poll_type === 0) {
      console.log("poll type 0");

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
          {item.anonymous_user
            ? "Anonymous"
            : user && user.first_name
            ? user.first_name
            : "Anonymous"}
        </span>
        <span className="separator">•</span>
        <span className="timestamp">
          {moment(item.created_at).format("ll")}
        </span>
      </div>
      <div className="QuestionBlock_question">{item.question_text}</div>

      <div className="QuestionBlock_choice">
        {polls && polls.length > 0 ? (
          <Polls polls={polls} setPolls={setPolls} />
        ) : (
          <Answers questionId={item.id} />
        )}
      </div>

      <div className="QuestionBlock_share">
        <FacebookShareButton url={`${config.rootUrl}/question/${item.id}`}>
          <FacebookIcon size={25} round={true} />
        </FacebookShareButton>
        <LinkedinShareButton url={`${config.rootUrl}/question/${item.id}`}>
          <LinkedinIcon size={25} round={true} />
        </LinkedinShareButton>
        <TwitterShareButton url={`${config.rootUrl}/question/${item.id}`}>
          <TwitterIcon size={25} round={true} />
        </TwitterShareButton>
        <TelegramShareButton url={`${config.rootUrl}/question/${item.id}`}>
          <TelegramIcon size={25} round={true} />
        </TelegramShareButton>
        <WhatsappShareButton url={`${config.rootUrl}/question/${item.id}`}>
          <WhatsappIcon size={25} round={true} />
        </WhatsappShareButton>
      </div>
    </QuestionBlock>
  );
};

export default QuestionsListItem;
