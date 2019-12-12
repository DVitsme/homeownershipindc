import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import RowHouses from "../../../static/images/homepage/about/row-housesjpg";

export const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" sm="5">
            <div style={{ overflow: "hidden" }}>
              <div style={{ maxWidth: "initial" }}>
                <img src={RowHouses} alt="row houses in dc" />
              </div>
            </div>
          </Col>
          <Col xs="12" sm="7" className="my-5">
            <div style={{ textAlign: "justify", textJustify: "distribute" }}>
              <h2 className="font-weight-bold mb-5 ">
                American Black people face a unique set of circumstances.
              </h2>
            </div>
            <p>
              which have historically prohibited upward mobility through social
              stigma which was reinforced by government policies.
            </p>
            <p>
              While many of these regulations have been physically overturned or
              deemed unconstitutional, they are part of past housing legislation
              which created the segregation we continue to witness today.
            </p>
            <p>
              Today the focus on homeownership tends to circle around getting
              people into homes and not what it takes to stay there. When it
              comes to the American Black community policy actors and economists
              tends to center the conversation around low income housing.
            </p>
            <Button color="info">Read More About</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
