import React, { useState } from "react";
import shortid from "shortid";

// Components
import Button from "../../components/Button/Button";

const Mcq = ({ choice, choices, setChoice, setChoices }) => {
  const handleMcqCreation = () => {
    if (!choice && choices.length === 4) return;

    let _choice = {
      value: choice,
      id: shortid.generate()
    };

    console.log("choice:::", _choice);

    setChoices([...choices, _choice]);
    setChoice("");
  };

  const handleMcqDeletion = ({ target }) => {
    let { id } = target.dataset;

    let _choices = choices.filter(v => v.id !== id);

    setChoices(_choices);
  };

  const handleChange = ({ target }) => {
    let { value } = target;
    console.log("value:::", value);

    setChoice(value);
  };

  return (
    <div className="Mcq">
      {choices.map(v => (
        <div className="Mcq_choice" key={v.id}>
          <span className="choice">{v.value}</span>
          <span>
            <Button type="button" onClick={handleMcqDeletion} data-id={v.id}>
              Remove
            </Button>
          </span>
        </div>
      ))}

      {choices.length <= 3 ? (
        <div className="Mcq_creator">
          <input
            type="text"
            name="choice"
            placeholder="Type choice here..."
            value={choice}
            onChange={handleChange}
          />
          <span>
            <Button type="button" onClick={handleMcqCreation}>
              Add
            </Button>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Mcq;
