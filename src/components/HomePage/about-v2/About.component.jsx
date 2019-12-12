import React from "react";

import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";

const Title = styled.h2`
  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 68px;
    height: 2px;
    position: absolute;
    top: 19px;
    left: -100px;
    background-color: #d4d5d5;
  }
  font-family: "Lato", "Arial", Open-sans;
  line-height: 1.6;
  margin-bottom: 19px;
  position: relative;
  letter-spacing: -0.1px;
  font-weight: 400;
  color: #272b2e;
  margin-top: 10px;
  text-size-adjust: 100%;
`;
const ContentDivider = styled.div`
  width: 2px;
  height: 144px;
  background-color: #e9eded;
`;
const ContentSubTitle = styled.p`
  &::first-letter {
    font-family: "Prata", "Arial", sans-serif;
    font-size: 54px;
    line-height: 1;
    font-weight: 400;
    color: #c2b697;
    display: block;
    float: left;
    margin: 9px 14px -3px 3px;
  }
`;
export const About = () => {
  return (
    <section style={{ backgroundColor: "#f8f8f8" }} className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} lg={3}>
            <Title>Some Title Here That is a few words idk yet</Title>
          </Col>
          <Col lg={1}>
            <ContentDivider></ContentDivider>
          </Col>
          <Col lg={4}>
            <ContentSubTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quod
              et, explicabo, voluptates ut blanditiis officiis optio amet ipsa
              omnis perferendis voluptatem aliquam repellendus.
            </ContentSubTitle>
          </Col>
          <Col lg={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              eum minus, neque aut est, porro repellendus tempore illo quas
              accusantium delectus. Consequuntur deleniti earum corrupti?
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
