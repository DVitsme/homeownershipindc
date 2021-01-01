import React from "react";
import { Button, Container } from "reactstrap";
import styled from "styled-components";
import ConfirmSections from "./confirmSections.component";

const SectionTitle = styled.h2`
  text-align: center;
  text-shadow: 0em 0.02em 0 rgba(0, 0, 0, 0.1);
  padding-top: 2rem;
  font-family: "Lato";
  font-size: 2.5rem;
`;
const NextButton = styled(Button)`
  :hover {
    background-color: #28a745;
    border-color: #28a745;
  }
`;
const PrevButton = styled(Button)`
  :hover {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  margin-right: 1.2rem;
`;
// <Button onClick={() => confirm(values)}>Confirm</Button>
const Confirm = ({ values, confirm, prevStep }) => {
  const { sectionTitle } = values;
  return (
    <Container>
      <div className="mt-5 mb-3">
        <SectionTitle>CONFIRM</SectionTitle>
      </div>
      {sectionTitle.map((title, index) => (
        <div key={index}>
          <h3>{title.displayTitle}</h3>
          <hr />
          <ConfirmSections data={values[title.jsonTitle]} />
        </div>
      ))}
      <PrevButton onClick={() => prevStep()}>Go Back</PrevButton>
      <NextButton onClick={() => confirm(values)}>Confirm</NextButton>
    </Container>
  );
};

export default Confirm;
