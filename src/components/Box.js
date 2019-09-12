import React from "react";
import store from "./store";
import * as actionCreators from "./actionCreators";

class Box extends React.Component {
  render() {
    return (
      <div className="border border box-container">
        <p>Your balance is: {store.getState()}</p>
        <button
          className="btn btn-default"
          onClick={() => {
            store.dispatch(actionCreators.incBal());
          }}
        >
          + 10,000
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            store.dispatch(actionCreators.decBal());
          }}
        >
          - 10,000
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            store.dispatch(actionCreators.resetBal());
          }}
        >
          Donate to charity
        </button>
      </div>
    );
  }
}

export default Box;
