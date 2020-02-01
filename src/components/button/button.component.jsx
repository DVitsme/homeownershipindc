import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const ButtonComponent = styled(Button)`
  z-index: 20;
  white-space: nowrap;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  background-color: rgb(204, 189, 153);
  border: 1px solid rgb(204, 189, 153);
  letter-spacing: 1px;
  text-align: left;
  margin: 0px;
  box-shadow: rgb(153, 153, 153) 0px 0px 0px 0px;
  border-radius: 0px;
  text-transform: uppercase;
`;

const CTAButton = ({ content, padding }) => {
  return (
    <ButtonComponent style={{ padding: padding }}>{content}</ButtonComponent>
  );
};

export default CTAButton;
