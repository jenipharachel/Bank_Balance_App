import React from "react";
import { shallow } from "enzyme";
import Header from "./components/Header";
import reducer from "./components/reducer";
import { incBal, decBal, resetBal } from "./components/actionCreators";

test("testing header component", () => {
  const component = shallow(<Header />);
  const wrapper = component.find(`[data-test="headerComponent"]`);
  expect(wrapper.length).toBe(1);
});

describe("testing reducer function", () => {
  const setUp = (val, button) => {
    const state = val;
    const action = { type: button };
    const store = reducer(state, action);
    return store;
  };

  test("increment", () => {
    const store = setUp(10000, "inc");
    expect(store).toEqual(20000);
  });

  test("dec when state is 0", () => {
    const store = setUp(0, "dec");
    expect(store).toEqual(0);
  });

  test("dec when state > 0", () => {
    const store = setUp(10000, "dec");
    expect(store).toEqual(0);
  });

  test("reset", () => {
    const store = setUp(10000, "reset");
    expect(store).toEqual(0);
  });

  test("default", () => {
    const store = setUp(10000);
    expect(store).toEqual(10000);
  });
});

describe("testing action creators", () => {
  test("inc", () => {
    const action = { type: "inc" };
    const result = incBal();
    expect(result).toEqual(action);
  });

  test("dec", () => {
    const action = { type: "dec" };
    const result = decBal();
    expect(result).toEqual(action);
  });

  test("reset", () => {
    const action = { type: "reset" };
    const result = resetBal();
    expect(result).toEqual(action);
  });
});
