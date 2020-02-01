import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  font-family: "Arial", sans-serif;
  margin-bottom: 19px;
  position: relative;
  letter-spacing: -0.1px;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 68px;
    height: 2px;
    position: absolute;
    top: 19px;
    left: -100px;
    background-color: #ccbd99;
  }
`;

const Title = props => {
  return <Text>{props.content}</Text>;
};

export default Title;
