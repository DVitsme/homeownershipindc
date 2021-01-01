import React from "react";
import styled from "styled-components";

const NotAnswered = styled.td`
  color: #dc3545;
  padding-left: 1.7rem;
`;
const SuccesfullyAnswered = styled.td`
  color: #28a745;
  padding-left: 1.7rem;
`;
const findRadioButton = (data) => {
  if (data.options !== undefined) {
    const foundButton = data.options.find(
      (selectedButton) => selectedButton.checked === true
    );
    if (foundButton === undefined) {
      return (
        <tr>
          <NotAnswered>> Nothing Selected</NotAnswered>
        </tr>
      );
    } else {
      return (
        <tr>
          <SuccesfullyAnswered>> {foundButton.name}</SuccesfullyAnswered>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <NotAnswered> > Nothing Selected</NotAnswered>
      </tr>
    );
  }
};
const findCheckBoxes = (data) => {
  const foundChecked = data.options.filter((box) => {
    return box.checked === true;
  });
  if (foundChecked.length === 0) {
    return (
      <tr>
        <NotAnswered> > None Chcked</NotAnswered>
      </tr>
    );
  }
  return foundChecked.map((checkedBoxes, index) => (
    <tr key={index}>
      <SuccesfullyAnswered> {checkedBoxes.name}</SuccesfullyAnswered>
    </tr>
  ));
};
const CardSurveyValue = ({ data, data: { name, type, value } }) => {
  if (type === "input") {
    return (
      <React.Fragment>
        <thead>
          <tr>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.value === "" ? (
              <NotAnswered>> Left Blank</NotAnswered>
            ) : (
              <SuccesfullyAnswered>> {data.value}</SuccesfullyAnswered>
            )}
          </tr>
        </tbody>
      </React.Fragment>
    );
  } else if (type === "radio") {
    return (
      <React.Fragment>
        <thead>
          <tr>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>{findRadioButton(data)}</tbody>
      </React.Fragment>
    );
  } else if (type === "checkbox") {
    return (
      <React.Fragment>
        <thead>
          <tr>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>{findCheckBoxes(data)}</tbody>
      </React.Fragment>
    );
  }
};

export default CardSurveyValue;
