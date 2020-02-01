import React from "react";
import { ListGroupItem } from "reactstrap";

const Question = ({ handleClick, selected, id, question }) => {
  return (
    <ListGroupItem
      tag="button"
      action
      onClick={() => handleClick(id)}
      style={{ backgroundColor: `${selected === id ? " #47414f" : ""}` }}
    >
      <p
        style={{
          marginBottom: 0,
          color: `${selected === id ? "#ccbd99" : ""}`
        }}
      >
        {question}?
      </p>
    </ListGroupItem>
  );
};

export default Question;
