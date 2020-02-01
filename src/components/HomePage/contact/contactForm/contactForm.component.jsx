import React, { Component } from "react";

import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { firestore } from "../../../../firebase/firebase";

import styled from "styled-components";
import CTAButton from "../../../button/button.component";

const ContactInput = styled(Input)`
  border: none;
  border-radius: 0;
  background-color: #f8f8f8;
`;
const ContactLabel = styled(Label)`
  color: #fff;
`;
export class ContactForm extends Component {
  state = { name: "", phone: "", email: "", message: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const { name, email, phone, message } = this.state;

    const post = {
      name,
      email,
      phone,
      message,
      createdAt: new Date()
    };

    firestore.collection("contact").add(post);

    this.setState({ name: "", email: "", phone: "", message: "" });
  };
  render() {
    const { name, email, phone, message } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <ContactLabel for="name">Name</ContactLabel>
                <ContactInput
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  id="name"
                  placeholder="Your Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <ContactLabel for="phone">Phone</ContactLabel>
                <ContactInput
                  type="text"
                  value={phone}
                  onChange={this.handleChange}
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <ContactLabel for="email">Email</ContactLabel>
                <ContactInput
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup row>
            <ContactLabel for="message" sm={2}>
              Your Message
            </ContactLabel>
            <Col sm={12}>
              <ContactInput
                type="textarea"
                name="message"
                id="message"
                rows="5"
                cols="30"
                placeholder="Your Message"
                value={message}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <CTAButton padding="15px 30px" content="Send Message" />
        </Form>
      </div>
    );
  }
}

export default ContactForm;
