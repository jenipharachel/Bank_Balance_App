import { createStore } from "redux";

const reducer = (state = 100000, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

export default store;
