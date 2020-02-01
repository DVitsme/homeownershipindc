import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const BackgroundColor = styled.section`
  background-color: #47414f;
  padding: 66px 0 56px;
`;
const Title = styled.h3`
  color: #ccbd99;
  font-size: 32px;
  text-align: center;
`;

export const TextBlock = () => {
  return (
    <BackgroundColor>
      <Container>
        <Row>
          <div className="mx-5 mb-5">
            <Col xs={12}>
              <Title>
                The purpose of this study is to learn more about tenured
                homeownership with members of the Black middle class.{" "}
              </Title>
            </Col>
          </div>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <p className="text-white">
              While many of these regulations have been physically overturned or
              deemed unconstitutional, they are part of past housing legislation
              which created the segregation we continue to witness today.{" "}
            </p>
            <hr />
            <p className="text-white">
              Today the focus on homeownership tends to circle around getting
              people into homes and not what it takes to stay there. When it
              comes to the American Black community policy actors and economists
              tends to center the conversation around low income housing.{" "}
            </p>
            <hr />
            <p className="text-white">
              I am interested in learning your perspective of homeownership
              during a changing city and a changing economic environment. The
              potential significance of this research is to provide evidence for
              public policy recommendations on how to better protect tenured
              homeownership among middle class Black homeowners. In addition to
              understanding how some policies may positively or negatively
              impact homeownership.{" "}
            </p>
            <hr />
            <p className="text-white">
              If you are willing to share your story, I would like to invite you
              to be part of a doctoral research study affiliated with Walden
              University. In-person appointments are available at your
              convenience in a location where you feel most comfortable.{" "}
            </p>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      </Container>
    </BackgroundColor>
  );
};
