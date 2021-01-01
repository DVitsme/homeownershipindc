import React, { Component } from "react";
import {
  Container as ReactStrapContainer,
  Button as ReactStrapButton,
  Form,
} from "reactstrap";
import styled from "styled-components";
import StepQuestion from "./stepQuestion.component";
import { Link } from "react-scroll";

const Title = styled.h2`
  text-align: center;
  text-shadow: 0em 0.02em 0 rgba(0, 0, 0, 0.1);
  padding-top: 2rem;
  font-family: "Lato";
  font-size: 2.5rem;
`;
const SubTitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #000;
`;
const Container = styled(ReactStrapContainer)`
  background-color: #fff;
  border-radius: 3px;
  padding: 0 5rem;
  padding-bottom: 2rem;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const NextButton = styled(ReactStrapButton)`
  :hover {
    background-color: #007bff;
    border-color: #007bff;
  }
`;
const PrevButton = styled(ReactStrapButton)`
  :hover {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  margin-right: 1.2rem;
`;
export default class StepContainer extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      handleChange,
      handleCheckboxChange,
      sectionTitle,
      questions,
      step,
    } = this.props;
    return (
      <Container name="Header">
        <div className="mt-5 mb-3">
          <Title>{sectionTitle.displayTitle}</Title>
          <SubTitle>{sectionTitle.subTitle}</SubTitle>
        </div>
        <Form>
          {questions.map((question, index) => {
            return (
              <StepQuestion
                question={question}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                sectionTitle={sectionTitle.jsonTitle}
                postionInArray={index}
                key={index}
              />
            );
          })}
        </Form>
        {step === 0 ? (
          <div>
            {questions[0].value === "" ? (
              <ReactStrapButton color="danger" disabled onClick={this.continue}>
                Must Enter A Name
              </ReactStrapButton>
            ) : (
              <NextButton onClick={this.continue}>Next</NextButton>
            )}
          </div>
        ) : (
          <div>
            <PrevButton onClick={this.previous}>Go Back</PrevButton>
            <Link to="Header" spy={true} smooth={true} duration={300}>
              <NextButton onClick={this.continue}>Next</NextButton>
            </Link>
          </div>
        )}
      </Container>
    );
  }
}
