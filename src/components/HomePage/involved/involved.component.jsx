import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import { InvolvedParameters } from "./questions/data";
import Parameters from "./questions/parameters.component";
import Title from "../../titleText/title.component";

import WomanWorking from "../../../static/images/homepage/involved/woman-working-sink.jpg";

const Section = styled.section`
  padding: 4rem 0 3.5rem;
  background-color: #f8f8f8;
`;
const FixingSink = styled.div`
  background-image: url(${WomanWorking});
  height: 100%;
  background-position: right;
  background-size: cover;
`;
const Involved = () => {
  return (
    <Section name="involved">
      <Container>
        <Row>
          <Col md={4}>
            <FixingSink />
          </Col>
          <Col md={8}>
            <div className="my-2">
              <Title content="What is Involved?" />
              {InvolvedParameters.map(question => (
                <Parameters
                  key={question.id}
                  id={question.id}
                  content={question.content}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Involved;
