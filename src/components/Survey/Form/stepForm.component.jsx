import React, { Component } from "react";
import { Formik } from "formik";
import { Container, Button } from "reactstrap";

// import CTAButton from "../../button/button.component";
import StepFormQuestion from "./stepFormQuestion.component";

export class StepForm extends Component {
  render() {
    const {
      sectionTitle,
      sectionQuestions,
      handleChange,
      handleSubmit,
      state,
      toggleCheckBox,
      nextStep,
      prevStep
    } = this.props;
    return (
      <Container>
        <div className="center-text">
          <h2>{sectionTitle.displayTitle}</h2>
          <p>{sectionTitle.subTitle}</p>
        </div>

        <Formik initialValues={{ ...state }}>
          {({
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <div>
              {sectionQuestions.map((question, index) => (
                <StepFormQuestion
                  question={question}
                  handleChange={handleChange}
                  toggleCheckBox={toggleCheckBox}
                  key={index}
                  vaule={values}
                />
              ))}
              {sectionTitle.jsonTitle !== "aboutYou" ? (
                <Button onClick={prevStep}>Go Back</Button>
              ) : null}
              {sectionTitle === null ? (
                <Button>Submit</Button>
              ) : (
                <Button onClick={nextStep} type="submit">
                  Next
                </Button>
              )}
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </div>
          )}
        </Formik>
      </Container>
    );
  }
}

export default StepForm;
