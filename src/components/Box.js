import React from "react";
import { Button, Row, Col } from "react-bootstrap";

class Box extends React.Component {
  render() {
    return (
      <div className="border border-dark box-container">
        <p>Your balance is: Rs.{this.props.value.toLocaleString("en-IN")}</p>
        <Row>
          <Col>
            <Button variant="success" onClick={this.props.incBal}>
              + 10,000
            </Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={this.props.decBal}>
              - 10,000
            </Button>
          </Col>
          <Col>
            <Button variant="info" onClick={this.props.resetBal}>
              Donate to charity
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Box;
