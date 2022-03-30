import React from "react";
import { shallow } from "enzyme";
import Backdrop from "./Backdrop";

const testProps = {
  show: true,
  hide: jest.fn(() => {})
};

describe("Backdrop", () => {
  it("renders Backdrop correctly", () => {
    let wrapper = shallow(<Backdrop {...testProps} />);
    expect(wrapper).toMatchSnapshot("1. Before - Show Backdrop");
    testProps.show = false;
    wrapper = shallow(<Backdrop {...testProps} />);
    expect(wrapper).toMatchSnapshot("2. After - Hide Backdrop");
  });
});
