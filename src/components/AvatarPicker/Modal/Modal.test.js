import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

const testProps = {
  show: true,
  hide: jest.fn(() => {})
};

describe("Modal", () => {
  it("renders Modal correctly", () => {
    const wrapper = shallow(<Modal {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
