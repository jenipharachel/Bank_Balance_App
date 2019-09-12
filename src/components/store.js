import { createStore } from "redux";

const reducer = (state = 100000, action) => {
  switch (action.type) {
    case "inc": return state + 10000;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

export default store;
