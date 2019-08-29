import React, { PureComponent, Fragment } from "react";
import axios from "axios";

// COmponents
import QuestionsListItem from "./QuestionsListItem";

class QuestionsList extends PureComponent {
  state = {
    questionList: [],
    error: ""
  };

  async componentDidMount() {
    try {
      let questionList = await axios.get(`http://localhost:8000/polls/`);
      this.setState({ questionList: questionList.data }, () => {
        console.log("got poll:::", this.state);
      });
    } catch (ex) {
      console.log("error fetching polls::", ex);
      // this.setState({error: ex})
    }
  }

  render() {
    const { questionList, error } = this.state;

    if (error) return <p>Error: {error}</p>;

    return (
      <Fragment>
        {questionList.map(v => (
          <QuestionsListItem key={v.id} item={v} />
        ))}
      </Fragment>
    );
  }
}

export default QuestionsList;
