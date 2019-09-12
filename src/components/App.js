import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { incBal, decBal, resetBal } from "./actionCreators";
import Header from "./Header";
import Box from "./Box";

const mapStateToProps = function(state) {
  return { value: state };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ incBal, decBal, resetBal }, dispatch);
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Box
          incBal={this.props.incBal}
          decBal={this.props.decBal}
          resetBal={this.props.resetBal}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
