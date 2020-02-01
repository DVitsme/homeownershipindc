import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #fff;
  font-size: 17px;
  line-height: 1.4;
`;
const PurposeText = ({ content }) => {
  return (
    <div>
      <Text>{content}</Text>
    </div>
  );
};

export default PurposeText;
