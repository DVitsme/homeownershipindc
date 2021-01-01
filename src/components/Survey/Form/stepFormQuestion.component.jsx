import React from "react";
import styled from "styled-components";

import { Field } from "formik";
import { Col, Row, FormGroup, Label, Input, CustomInput } from "reactstrap";

const ContactInput = styled(Input)`
  border: none;
  border-radius: 0;
  background-color: #f8f8f8;
`;
const ContactLabel = styled(Label)`
  color: #fff;
`;
const valueTest = e => {
  console.log(e.value);
  return e;
};

const StepFormQuestion = props => {
  const { question, handleChange } = props;
  if (question.type === "input") {
    return (
      <Row>
        <Col md={12}>
          <FormGroup>
            <ContactLabel for={question.name}>{question.name}</ContactLabel>
            <Field
              name={question.name}
              type={question.type}
              as={ContactInput}
              placeholder={question.placeholder}
            />
          </FormGroup>
        </Col>
      </Row>
    );
  } else if (question.type === "radio") {
    return (
      <Row>
        <Col md={12}>
          <legend>{question.name}</legend>
          {question.options.map((option, index) => (
            <FormGroup check key={index}>
              <Label check>
                <Input type={question.type} name={option} />
                {option}
              </Label>
            </FormGroup>
          ))}
        </Col>
      </Row>
    );
  } else if (question.type === "checkbox") {
    return (
      <FormGroup row>
        <Col sm={{ size: 4 }}>
          <CustomInput
            type="checkbox"
            id={question.name}
            name={question.name}
            label={question.name}
            onChange={valueTest}
          />
        </Col>
      </FormGroup>
    );
  }
};

export default StepFormQuestion;
