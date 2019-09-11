import Redux from "redux";

const reducer = (state = 100000, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

export default store;
