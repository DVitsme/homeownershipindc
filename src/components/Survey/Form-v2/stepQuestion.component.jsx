import React from "react";
import { Row, Col, FormGroup, Label, Input, CustomInput } from "reactstrap";

const StepQuestion = (props) => {
  const { question, handleChange, sectionTitle, postionInArray } = props;
  if (question.type === "input") {
    return (
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for={question.name}>{question.name}</Label>
            <Input
              name={question.name}
              key={question.name}
              type={question.type}
              value={question.value}
              onChange={handleChange(sectionTitle, postionInArray)}
              placeholder={question.placeholder}
            />
          </FormGroup>
        </Col>
      </Row>
    );
  } else if (question.type === "checkbox" || "radio") {
    return (
      <FormGroup row>
        <Col sm={{ size: 12 }}>
          <p>{question.name}</p>
        </Col>
        <Col sm={{ size: 4 }}>
          {question.options.map((checkbox, index) => (
            <CustomInput
              type={question.type}
              name={checkbox.name}
              checked={checkbox.checked}
              onChange={handleChange(
                sectionTitle,
                postionInArray,
                checkbox,
                question.type
              )}
              label={checkbox.name}
              id={checkbox.name}
              key={index}
            />
          ))}
        </Col>
      </FormGroup>
    );
  }
};

export default StepQuestion;
