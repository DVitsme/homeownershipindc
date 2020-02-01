import React, { Component } from "react";
import { Col, Row, FormGroup, Button } from "reactstrap";

export class YesNoQuestions extends Component {
  state = {
    yes: true,
    no: true,
    result: null
  };

  changeYesColor = () => {
    this.setState({ yes: !this.state.yes, no: true, result: true });
  };
  changeNoColor = () => {
    this.setState({ no: !this.state.no, yes: true, result: false });
  };
  render() {
    const { question } = this.props;
    let yesBtnClass = this.state.yes ? "secondary" : "success";
    let noBtnClass = this.state.no ? "secondary" : "danger";
    return (
      <Row form>
        <Col xs={8}>
          <p>{question}</p>
        </Col>
        <Col md={2}>
          <Button color={yesBtnClass} onClick={this.changeYesColor}>
            Yes
          </Button>
        </Col>
        <Col md={2}>
          <Button color={noBtnClass} onClick={this.changeNoColor}>
            No
          </Button>
        </Col>
      </Row>
    );
  }
}

export default YesNoQuestions;
