import React from "react";
import {
  Card,
  Col,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const CardValue = ({ data, boxSize, index, bg }) => {
  const parsedDate = data.createdAt.seconds;
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
  const { email, message, name, phone } = data;
  return (
    <Col md={4} className="mt-2 mb-5">
      <Card className={`${bg ? "text-light bg-dark" : ""}`}>
        <CardHeader
          tag="h4"
          style={{ marginTop: "0" }}
          className={`${bg ? "text-light" : ""}`}
        >
          (#{index + 1}) {name}
        </CardHeader>
        <CardBody>
          <CardText className={`${bg ? "text-light" : ""}`}>
            Email: {email}
          </CardText>
          <CardText className={`${bg ? "text-light" : ""}`}>
            Phone: {phone}
          </CardText>
          <CardTitle>Message: {message} </CardTitle>
          <CardTitle>
            Date: {month} {day}{" "}
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardValue;
