import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const FooterWrap = styled.footer`
  background-color: #232629;
  padding-top: 36px;
  padding-bottom: 20px;
`;

const CopyRightText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #797f85;
  margin: 0 0 7px 0;
  text-align: right;
`;
const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={8}>
            <CopyRightText>
              © 2019 Homeownership in DC. All rights reserved.
            </CopyRightText>
          </Col>
        </Row>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
