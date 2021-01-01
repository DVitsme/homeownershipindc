import React, { Component } from "react";
import CardSurveyValue from "./cardSurveyValue.component";
import {
  Table as TableReactStrap,
  Row as RowReactStrap,
  Col,
} from "reactstrap";
import styled from "styled-components";

const Table = styled(TableReactStrap)`
  display: ${(props) => props.showcontent};
`;
const Row = styled(RowReactStrap)`
  background-color: #343a40;
`;
const Title = styled.p`
  color: #fff;
  font-size: 2rem;
  margin-top: 1rem;
`;
export default class CardSurveyConatainer extends Component {
  state = {
    display: "none",
  };
  toggle = () => {
    if (this.state.display === "none") {
      return this.setState({ display: "block" });
    } else if (this.state.display === "block") {
      return this.setState({ display: "none" });
    }
  };
  render() {
    const { data } = this.props;
    const {
      aboutYou,
      createdAt,
      yourHousehold,
      yourNeighborhood,
      yourNeighbors,
    } = data;
    const parsedDate = createdAt.seconds;
    const date = new Date(parsedDate * 1000);
    const months_arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months_arr[date.getMonth()];
    const day = date.getDate();
    return (
      <Row className="mb-4">
        <Col md={10} onClick={() => this.toggle()}>
          <Title style={{ marginLeft: "1rem" }}>{aboutYou[0].value}</Title>
        </Col>
        <Col md={2}>
          <Title style={{ marginLeft: "1rem" }}>
            {month}-{day}
          </Title>
        </Col>
        <Table dark hover showcontent={this.state.display}>
          {aboutYou.map((data, index) => (
            <CardSurveyValue data={data} key={index} />
          ))}
          {yourHousehold.map((data, index) => (
            <CardSurveyValue data={data} key={index} />
          ))}
          {yourNeighborhood.map((data, index) => (
            <CardSurveyValue data={data} key={index} />
          ))}
          {yourNeighbors.map((data, index) => (
            <CardSurveyValue data={data} key={index} />
          ))}
        </Table>
      </Row>
    );
  }
}
