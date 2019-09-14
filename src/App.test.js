import React from "react";
import { shallow } from "enzyme";
import Header from "./components/Header";

test("testing header component", () => {
  const component = shallow(<Header />);
  const wrapper = component.find(`[data-test="headerComponent"]`);
  expect(wrapper.length).toBe(1);
});
