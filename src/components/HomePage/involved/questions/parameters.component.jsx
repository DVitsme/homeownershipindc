import React from "react";
import styled from "styled-components";

const InvolvedParameters = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #47414f;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Parameters = props => {
  return (
    <div>
      <InvolvedParameters>{props.content}</InvolvedParameters>
    </div>
  );
};

export default Parameters;
