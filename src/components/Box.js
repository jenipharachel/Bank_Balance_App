import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className="border border box-container">
        <p>Your balance is: Rs.{this.props.value.toLocaleString("en-IN")}</p>
        <button className="btn btn-default" onClick={this.props.incBal}>
          + 10,000
        </button>
        <button className="btn btn-default" onClick={this.props.decBal}>
          - 10,000
        </button>
        <button className="btn btn-default" onClick={this.props.resetBal}>
          Donate to charity
        </button>
      </div>
    );
  }
}

export default Box;
