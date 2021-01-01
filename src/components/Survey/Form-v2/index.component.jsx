import React, { Component } from "react";
import { Button } from "reactstrap";
import StepContainer from "./stepContainer.component";
import Confirm from "./confirm/confirm.component";
import { firestore } from "../../../firebase/firebase";

import data from "../data/data";
import Complete from "./complete.component";

export default class Index extends Component {
  state = {
    step: 0,
    ...data,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  restart = () => {
    this.setState({
      step: 0,
    });
  };

  handleChange = (sectionTitle, index, checkbox, type) => (e) => {
    const { value } = e.target;
    // get the proper step name
    const stateToBeUpdated = this.state[sectionTitle];
    // get the proper input.
    const stateToBeUpdatedValue = stateToBeUpdated[index];
    // update the value
    const stateChanged = (stateToBeUpdatedValue.value = value);

    if (type === "checkbox") {
      const checkBoxChanged = (checkbox.checked = !checkbox.checked);
      // POSSIBLE PROBLEM double saving to state
      this.setState((prevState) => ({
        ...prevState,
        checkBoxChanged,
      }));
    }
    if (type === "radio") {
      // const setOtherRadioToFalse = stateToBeUpdatedValue.options.map(button => {
      //   if (checkbox.name !== button.name) {
      //     button.checked = false;
      //   }
      //   return { ...button };
      // });
      const updateSectionState = stateToBeUpdated.map((question) => {
        if (question.name === stateToBeUpdatedValue.name) {
          const options = stateToBeUpdatedValue.options.map((button) => {
            let { name } = button;
            if (checkbox.name !== name) {
              button.checked = false;
            } else {
              button.checked = true;
            }

            return { name, ...button };
          });

          return { ...question, options };
        }
        return { ...question };
      });
      // save to state
      // const prevSavedInfo = stateToBeUpdated;
      this.setState((prevState) => ({
        ...prevState,
        [sectionTitle]: updateSectionState,
      }));
    }
    // save the vale to state
    this.setState((prevState) => ({
      ...prevState,
      stateChanged,
    }));
  };

  handleConfirm = (data) => {
    const dataToPost = { ...data, createdAt: new Date() };
    firestore.collection("survey").add(dataToPost);
    this.nextStep();
  };
  render() {
    const { step } = this.state;

    switch (step) {
      case 0:
        return (
          <StepContainer
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleCheckboxChange={this.handleCheckboxChange}
            questions={this.state.aboutYou}
            sectionTitle={this.state.sectionTitle[step]}
            step={step}
          />
        );
      case 1:
        return (
          <StepContainer
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            questions={this.state.yourHousehold}
            sectionTitle={this.state.sectionTitle[step]}
            step={step}
          />
        );
      case 2:
        return (
          <StepContainer
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            questions={this.state.yourNeighborhood}
            sectionTitle={this.state.sectionTitle[step]}
            step={step}
          />
        );
      case 3:
        return (
          <StepContainer
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            questions={this.state.yourNeighbors}
            sectionTitle={this.state.sectionTitle[step]}
            step={step}
          />
        );
      case 4: {
        return (
          <Confirm
            values={this.state}
            confirm={this.handleConfirm}
            prevStep={this.prevStep}
          />
        );
      }
      case 5: {
        return <Complete name={this.state.aboutYou[0].value} />;
      }
      default:
        return (
          <div>
            <h1>Im lost Restart?</h1>
            <Button onClick={this.restart}> Restart</Button>
          </div>
        );
    }
  }
}
