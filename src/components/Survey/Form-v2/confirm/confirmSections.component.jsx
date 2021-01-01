import React from "react";
import ConfirmQuestion from "./confirmQuestion.component";
import { Table } from "reactstrap";

const ConfirmSections = ({ data }) => {
  return (
    <Table borderless>
      {data.map((question, index) => (
        <ConfirmQuestion data={question} key={index} />
      ))}
    </Table>
  );
};

export default ConfirmSections;
