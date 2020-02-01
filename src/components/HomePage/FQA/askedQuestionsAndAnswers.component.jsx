import React, { Component } from "react";
import { Container, Row, Col, ListGroup } from "reactstrap";
import styled from "styled-components";
import Question from "./questions/question.component";

import { Data } from "./data/data";
import AnswerFormatter from "./answers/answerFormatter.component";
import Title from "../../titleText/title.component";

const Section = styled.div`
  padding: 4rem 0 3.5rem;
`;

export class AskedQuestionsAndAnswers extends Component {
  state = {
    id: 1,
    question: "What is a research study",
    answer:
      "A research study is a defined effort by researchers, sometimes these are economists, scientists or even medical doctors, to investigate a research question. This effort includes the development of a study design, and a plan for implementation, measurement and reporting."
  };

  handleClick = id => {
    const { answer, question, example1, example2, example3 } = Data[id - 1];
    this.setState({
      id,
      answer: answer,
      question: question,
      example1: example1,
      example2: example2,
      example3: example3
    });
  };

  render() {
    return (
      <Section name="questions">
        <div>
          <Container>
            <Row>
              <Col md={6}>
                <Title content="Frequently Asked Questions and Answers" />
                <ListGroup flush>
                  {Data.map(question => (
                    <Question
                      key={question.id}
                      selected={this.state.id}
                      id={question.id}
                      question={question.question}
                      handleClick={this.handleClick}
                    />
                  ))}
                </ListGroup>
              </Col>
              <Col md={6}>
                <AnswerFormatter
                  answer={this.state.answer}
                  question={this.state.question}
                  example1={this.state.example1}
                  example2={this.state.example2}
                  example3={this.state.example3}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Section>
    );
  }
}

export default AskedQuestionsAndAnswers;
