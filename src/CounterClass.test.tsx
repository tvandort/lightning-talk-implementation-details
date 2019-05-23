import React from "react";
import Counter from "./CounterClass";
import { shallow } from "enzyme";

describe(Counter, () => {
  describe("test using state", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
    });
  });

  describe("test by clicking check state", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
    });
  });

  describe("test drive", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
    });
  });
});
