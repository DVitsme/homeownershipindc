import React from "react";
import { Table } from "reactstrap";

import { TableData } from "../data/data";
import TableRow from "./tableRow.component";
import TableHeader from "./tableHeader.component";

const TableWards = props => {
  return (
    <div className="mt-3">
      <Table dark hover>
        <thead>
          <tr>
            {TableData.Header.map((title, index) => (
              <TableHeader key={title[index]} header={title} />
            ))}
          </tr>
        </thead>
        <tbody>
          {TableData.Cells.map(cell => (
            <TableRow
              key={cell.id}
              title={cell.title}
              percentBlack={cell.percentBlack}
              homeValue={cell.homeValue}
              medianIncome={cell.medianIncome}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableWards;
