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
    top: 25%;
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

const Benefits = () => {
  return (
    <Section>
      <Container>
        <CenterText>
          <Row>
            <Col xs={12}>
              <Title>Benefits of Participating</Title>
              <SubTitle>
                While there is a minimal direct benefit to you as an individual
                for participating in this study, beyond the $20 thank you gift.
                I believe the results of this study will offer benefits for
                social change. The data could be used to understand the
                experience of homeownership overtime in the District of
                Columbia. The results of the research could improve society's
                understanding of the Black middle class and the impact of
                homeownership. Finally, the results of the study could provide
                evidence for public policy recommendations to the D.C. Council
                on how to better protect long-term homeowners.
              </SubTitle>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={{ size: 8, offset: 2 }}>
              <CallToAction>
                To participate or for more information please contact Dawn
                Valentine
                <br />
                Dawn.valentine@waldenu.edu or call: (240) 424-5658
              </CallToAction>
            </Col>
          </Row>
        </CenterText>
      </Container>
    </Section>
  );
};

export default Benefits;
