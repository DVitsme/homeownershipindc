import React from "react";

const Answer = ({ question, content }) => {
  return (
    <div>
      <h3>{question}?</h3>
      <p>{content}</p>
    </div>
  );
};

export default Answer;
