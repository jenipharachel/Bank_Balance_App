import React from "react";
import { createStore } from "redux";

const reducer = (state = 100000, action) => {
  switch (action.type) {
    case "inc":
      return state + 10000;
    case "dec":
      if(state === 0) {
        return alert('Bank Balance is 0, credit some amount to account');
      }
      return state - 10000;
    case "reset":
      if(state === 0) {
        return alert("No money available to donate")
      }
      return 0;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

//action creators

const incBal = () => {
  return {
    type: "inc"
  };
};

const decBal = () => {
  return {
    type: "dec"
  };
};

const resetBal = () => {
  return {
    type: "reset"
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
          + 10,000
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            store.dispatch(decBal());
          }}
        >
          - 10,000
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            store.dispatch(resetBal());
          }}
        >
          Donate to charity
        </button>
      </div>
    );
  }
}

export default Box;
