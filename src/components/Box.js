import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

class Box extends React.Component {
  static propTypes = {
    incBal: PropTypes.func.isRequired,
    decBal: PropTypes.func.isRequired,
    resetBal: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
  };

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
