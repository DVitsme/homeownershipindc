import React from "react";

import styled from "styled-components";

const ArrowText = styled.li`
  font-family: "Prata", "Arial", sans-serif;
  font-weight: 400;
  border-top: 1px solid #47414f;
  padding: 26px 0;
  margin: 0;
  list-style: none;
  font-size: 18px;
  color: #272b2e;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding-left: 25px;
  width: 100%;

  &::before {
    content: "";
    background-color: #9f96ab;
    width: 16px;
    height: 1px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 9px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    left: 0;
  }
  &::after {
    content: "";
    border-top: 3px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 6px solid #9f96ab;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    left: 12px;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    transition: 0.5s all;
    -webkit-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    transform: translateY(-4px);
  }
`;

const YesNoQuestions = props => {
  return <ArrowText>{props.question}?</ArrowText>;
};

export default YesNoQuestions;
