import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div class="border border box-container">
        <p>Your balance is:</p>
        <button class="btn btn-default">Increment</button>
        <button class="btn btn-default">Decrement</button>
        <button class="btn btn-default">Reset</button>
      </div>
    );
  }
}

export default Box;
