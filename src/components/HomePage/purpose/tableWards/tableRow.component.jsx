import React from "react";
import styled from "styled-components";

const TableHeader = styled.th`
  color: #fff;
  font-size: 17px;
`;

const TableCell = styled.th`
  color: #fff;
`;

const TableRow = ({ title, percentBlack, homeValue, medianIncome }) => {
  return (
    <tr>
      <TableHeader scope="row">{title}</TableHeader>
      <TableCell>{percentBlack}%</TableCell>
      <TableCell>${homeValue}</TableCell>
      <TableCell>${medianIncome}</TableCell>
    </tr>
  );
};

export default TableRow;
