import React from "react";
import Answer from "./answer.component";
import Example from "./example.component";

const AnswerFormatter = ({
  answer,
  question,
  example1,
  example2,
  example3
}) => {
  return (
    <div>
      {answer ? (
        <Answer question={question} content={answer} />
      ) : (
        <Example
          question={question}
          example1={example1}
          example2={example2}
          example3={example3}
        />
      )}
    </div>
  );
};

export default AnswerFormatter;
