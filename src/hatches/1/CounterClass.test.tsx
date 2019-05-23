import React from "react";
import Counter from "./CounterClass";
import { shallow } from "enzyme";

describe(Counter, () => {
  describe("test by calling directly", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
      const counter = wrapper.instance();

      counter.add();

      expect(wrapper.state()).toStrictEqual({
        count: 1
      });
    });
  });

  describe("test by clicking", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
      const button = wrapper.find({ children: "Add" });

      button.simulate("click");

      expect(wrapper.state()).toStrictEqual({
        count: 1
      });
    });
  });

  describe("test what happens", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
      const button = wrapper.find({ children: "Add" });

      button.simulate("click");
      const count = wrapper.find("#count");

      expect(count.text()).toBe("1");
    });
  });
});
