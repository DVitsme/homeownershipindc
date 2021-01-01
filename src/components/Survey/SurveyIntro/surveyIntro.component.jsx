import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f8f8f8;
  padding: 4rem 0 3.5rem;
`;

const CenterText = styled.div`
  text-align: center;
`;
const Title = styled.h2`
  &::before {
    content: "";
    width: 8.75rem;
    border-bottom: 2px solid #aa9166;
    display: inline-block;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  display: inline-block;
  font-size: 45px;
  color: #000;
`;
const SubTitle = styled.p`
  margin: 35px 0;
  line-height: 1.48em;
  font-size: 21px;
  color: #4e4e4e;
`;
const CallToAction = styled.p`
  margin: 15px 0;
  line-height: 1em;
  font-size: 21px;
  color: #4e4e4e;
  font-weight: 600;
`;

const SurveyIntro = () => {
  return (
    <Section>
      <Container>
        <CenterText>
          <Row>
            <Col xs={12}>
              <Title>Thank You</Title>
              <SubTitle>
                Thank you again for participating in my doctoral research study
                on homeownership in Washington DC. Please complete this survey
                at your convenience prior to our next meeting. If you are
                uncomfortable answering any of the questions please feel free to
                skip them.
              </SubTitle>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={{ size: 8, offset: 2 }}>
              <CallToAction>
                If you have any trouble with this form or would like assistance
                in completing it please feel free to call me at 240-273-2978.
              </CallToAction>
            </Col>
          </Row>
        </CenterText>
      </Container>
    </Section>
  );
};

export default SurveyIntro;
