import React, { Component } from "react";

import StepForm from "./stepForm.component";

import data from "../data/data.json";

// import { firestore } from "../../../firebase/firebase";

// const ContactInput = styled(Input)`
//   border: none;
//   border-radius: 0;
//   background-color: #f8f8f8;
// `;
// const ContactLabel = styled(Label)`
//   color: #fff;
// `;
export class SurveyForm extends Component {
  state = { step: 0, aboutYou: {} };
  componentDidMount() {
    const aboutYou = data.aboutYou.map(question => {
      return { [question.name]: "" };
    });
    const setYourNeighborhoodToState = data.yourNeighborhood.map(question => {
      return { [question.name]: "" };
    });
    this.setState({
      aboutYou: { aboutYou }
    });
  }
  handleChange = (e, sectionTitle) => {
    const { name, value } = e.target;
    this.setState({ [sectionTitle]: { [name]: value } });
  };
  toggleCheckBox = data => {
    console.log(data);
  };
  handleSubmit = event => {
    event.preventDefault();

    // const {  } = this.state;

    const post = {
      ...this.state,
      createdAt: new Date()
    };

    // firestore.collection("survey").add(post);
    // console.log(post);
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  restart = () => {
    this.setState({
      step: 1
    });
  };
  // stepsData = step => {
  //   const stepTitle = data.sectionTitle[step];
  //   const foundData = data.;
  //   return foundData;
  // };
  render() {
    const { step } = this.state;
    switch (step) {
      case 0:
        return (
          <StepForm
            sectionTitle={data.sectionTitle[step]}
            sectionQuestions={data.aboutYou}
            state={this.state.aboutYou}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            toggleCheckBox={this.toggleCheckBox}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 1:
        return (
          <div>
            <h1>{data.sectionTitle[step].displayTitle} </h1>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>{data.sectionTitle[step].displayTitle}</h1>
            <button onClick={this.prevStep}>Prev</button>
            <button onClick={this.nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>{data.sectionTitle[step].displayTitle}</h1>
            <button onClick={this.prevStep}>Prev</button>
            <button onClick={this.nextStep}>Next</button>
          </div>
        );
      default:
        return (
          <div>
            <h1>Something went wrong :(</h1>
            <button onClick={this.restart}>Restart</button>
          </div>
        );
    }
  }
}

export default SurveyForm;
