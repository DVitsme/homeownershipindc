import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import TableWards from "./tableWards/tableWards.component";
import { Text } from "./data/data";
import PurposeText from "./PurposeText/purposeText.component";

const BackgroundColor = styled.section`
  background-color: #47414f;
  padding: 66px 0 56px;
`;

const Title = styled.h3`
  color: #ccbd99;
  font-size: 32px;
  text-align: center;
`;

export const Purpose = () => {
  return (
    <BackgroundColor>
      <Container>
        <Row>
          <div className="mx-5 mb-3" name="purpose">
            <Title>
              The purpose of this study is to learn more about tenured
              homeownership with members of the Black middle class.
            </Title>
          </div>
          <Col xs={12} md={12}>
            {Text.map((content, index) => (
              <PurposeText key={index} content={content} />
            ))}
          </Col>
          <Col xs={12} md={12}>
            <TableWards />
          </Col>
        </Row>
      </Container>
    </BackgroundColor>
  );
};
