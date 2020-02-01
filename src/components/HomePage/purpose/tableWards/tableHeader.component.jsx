import React from "react";
import styled from "styled-components";

const Header = styled.th`
  color: #fff;
  font-size: 17px;
`;

const TableHeader = ({ header }) => {
  return <Header>{header}</Header>;
};

export default TableHeader;
