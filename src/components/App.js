import React from "react";
import Header from "./Header";
import Box from "./Box";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Box />
      </div>
    );
  }
}

export default App;
