import React from "react";

import Title from "../../titleText/title.component";

import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";

const ContentDivider = styled.div`
  width: 2px;
  height: 144px;
  background-color: #e9eded;
`;

const Subtitle = styled.p`
  color: inherit;
`;
const ListNode = styled.p`
  color: inherit;
`;
export const About = () => {
  return (
    <section style={{ backgroundColor: "#f8f8f8" }} className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} lg={3} style={{ textTransform: "capitalize" }}>
            <Title content="I would like to hear your story." active />
          </Col>
          <Col lg={1} className="d-none d-lg-block">
            <ContentDivider></ContentDivider>
          </Col>
          <Col md={6} lg={4}>
            <Subtitle>Welcome, thank you for reading about my study.</Subtitle>
            <p>
              This is a research study about experiences and perspectives on
              long term homeownership with members of the Black middle class in
              Washington, D.C.
            </p>
          </Col>
          <Col md={6} lg={4}>
            <ul>
              <li>
                <ListNode>The District of Columbia is changing;</ListNode>
              </li>
              <li>
                <ListNode>The middle class is changing; </ListNode>
              </li>
              <li>
                <ListNode>Homeownership has changed. </ListNode>
              </li>
            </ul>
            <p>How have these changes impacted you? </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

//     </Col>
// <Col lg={4}>
