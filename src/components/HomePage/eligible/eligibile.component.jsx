import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import Questions from "./questions/questions-v2.component";
import Title from "../../titleText/title.component";

import { EligibileContent, EligibileQuestions } from "./questions/data";

// question marks are in questions component

const SectionBackground = styled.section`
  background-color: #fff;
`;
const ListContainer = styled.div`
  padding: 4rem 0 3.5rem;
`;

const EligibileParameters = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #47414f;
`;
export default class Eligibile extends Component {
  render() {
    return (
      <SectionBackground name="eligibile">
        <ListContainer>
          <Container>
            <Title content="Are you Eligibile?" active />
            <Row>
              {/* Questions Getting Looped Here */}
              <Col xs={12} md={4}>
                <ul className="mt-2">
                  {/* Wanted to show half on one side half on the other so I broke up the array into half and looped over it twice */}
                  {EligibileQuestions.map((question, index) => {
                    if (index < EligibileQuestions.length / 2) {
                      return (
                        <Questions
                          key={question.id}
                          id={question.id}
                          question={question.question}
                        />
                      );
                    }
                    return null;
                  })}
                </ul>
              </Col>
              <Col xs={12} md={4}>
                {/* Adding + 1 because the aray is 0 base and if statement will fail if you dont */}
                <ul className="mt-2">
                  {EligibileQuestions.map((question, index) => {
                    if (index + 1 > EligibileQuestions.length / 2) {
                      return (
                        <Questions
                          key={question.id}
                          id={question.id}
                          question={question.question}
                        />
                      );
                    }
                    return null;
                  })}
                </ul>
                {/* Questions Getting Looped Here */}
              </Col>
              <Col xs={12} md={4}>
                {EligibileContent.map(parameters => (
                  <EligibileParameters key={parameters.id}>
                    {parameters.content}
                  </EligibileParameters>
                ))}
              </Col>
            </Row>
          </Container>
        </ListContainer>
      </SectionBackground>
    );
  }
}
