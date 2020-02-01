import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";

import ContactForm from "./contactForm/contactForm.component";
import ContactInfo from "./ContactInfo/contactInfo.component";

const Section = styled.section`
  background-color: #47414f;
  padding: 66px 0 56px;
`;

const Title = styled.h3`
  color: #fff;
`;

export default class Contact extends Component {
  render() {
    return (
      <Section name="contact">
        <Container>
          <Row>
            <Col md={9}>
              <Title>Get In Touch</Title>
              <ContactForm />
            </Col>
            <Col md={3}>
              <ContactInfo />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
