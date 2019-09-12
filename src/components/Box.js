import React from "react";
import { createStore } from "redux";

const reducer = (state = 100000, action) => {
  switch (action.type) {
    case "inc":
      return state + 10000;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

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
        <button
          className="btn btn-default"
          onClick={() => {
            store.dispatch(incBal());
          }}
        >
          Increment
        </button>
        <button className="btn btn-default">Decrement</button>
        <button className="btn btn-default">Reset</button>
      </div>
    );
  }
}

export default Box;
