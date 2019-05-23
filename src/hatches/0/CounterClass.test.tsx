import React from "react";
import Counter from "./CounterClass";
import { shallow } from "enzyme";

describe(Counter, () => {
  describe("test by calling directly", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
    });
  });

  describe("test by clicking", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
    });
  });

  describe("test what happens", () => {
    it("can add", () => {
      const wrapper = shallow<Counter>(<Counter />);
    });
  });
});
