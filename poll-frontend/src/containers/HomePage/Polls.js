import React, { useState } from "react";
import axios from "axios";

const Polls = ({ polls, setPolls }) => {
  const [voted, setVoted] = useState(false);

  const giveVote = async (voteId, prevVotes, setVoted) => {
    let { data } = await axios.patch(
      `http://localhost:8000/choice/${voteId}/`,
      {
        votes: Number(prevVotes) + 1
      }
    );

    console.log("dataL::::", data);

    setPolls(polls.map(v => (v.id === data.id ? data : v)));

    setVoted(true);
  };

  const handleVote = ({ target }) => {
    let { voteid, votes } = target.dataset;

    console.log("choideID:::", voteid, votes, target);

    giveVote(voteid, votes, setVoted);
  };

  return polls.map(v => (
    <div key={v.id}>
      <span className="QuestionBlock_choice-item Choice">{v.choice_text}</span>
      <span className="QuestionBlock_choice-item Vote">
        {!voted ? (
          <img
            src="/thumbs-up-64.png"
            data-voteid={v.id}
            data-votes={v.votes}
            alt="vote"
            onClick={handleVote}
          />
        ) : (
          v.votes
        )}
      </span>
      <div className="clean"></div>
    </div>
  ));
};

export default Polls;
