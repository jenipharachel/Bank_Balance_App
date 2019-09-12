import React from "react";
import store from "./store";

const incBal = () => {
  return {
    type: "inc"
  };
};

class Box extends React.Component {
  render() {
    return (
      <div className="border border box-container">
        <p>Your balance is: {store.getState()}</p>
        <button className="btn btn-default" onClick={store.dispatch(incBal())}>
          Increment
        </button>
        <button className="btn btn-default">Decrement</button>
        <button className="btn btn-default">Reset</button>
      </div>
    );
  }
}

export default Box;
