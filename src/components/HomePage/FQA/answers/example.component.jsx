import React from "react";
import styled from "styled-components";

const ExampleAnswer = styled.p`
  margin-left: 3%;
  border-bottom: 1px solid #47414f;
  padding-bottom: 10px;
  color: rgba(0, 0, 0, 0.8);
`;
const Example = ({ question, example1, example2, example3 }) => {
  return (
    <div>
      <h3>{question}?</h3>
      <ExampleAnswer>{example1}</ExampleAnswer>
      <ExampleAnswer>{example2}</ExampleAnswer>
      <ExampleAnswer>{example3}</ExampleAnswer>
    </div>
  );
};

export default Example;
