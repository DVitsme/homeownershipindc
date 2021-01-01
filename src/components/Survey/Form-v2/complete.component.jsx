import React from "react";
import { Container, Alert } from "reactstrap";

const Complete = (props) => {
  return (
    <Container className="my-5">
      <Alert color="success">
        <h4 className="alert-heading">
          Thank You {props.name !== "" ? props.name : null} for taking the time
          to complete this survey!
        </h4>
        <p>Your responses have been successfully submitted!</p>
        <hr />
        <p className="mb-0">
          I am grateful for your contributing your valuable time and your honest
          information. I look forward to our next interview.
        </p>
      </Alert>
    </Container>
  );
};

export default Complete;
