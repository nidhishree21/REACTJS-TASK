import React from "react";

import { mount } from "enzyme";
import AvatarList from "./AvatarList";

const testProps = {
  avatars: [
    {
      src: "/static/media/avatar1.7467b519.png",
      label: "Avatar 1",
      id: 1
    },
    {
      src: "/static/media/avatar3.c1a8b069.png",
      label: "Avatar 2",
      id: 2
    }
  ],
  onClickAvatar: jest.fn(() => {}),
  isActive: false,
  highlight: jest.fn(() => {
    return false;
  }),
  showSpinner: jest.fn(() => {
    return false;
  })
};

describe("AvatarList", () => {
  const wrapper = mount(<AvatarList {...testProps} />);
  it("renders the Avatar List correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("calls onClickAvatar function on clicking an avatar in the list", () => {
    const listAvatar = wrapper.find("[id=2]");
    listAvatar.simulate("click");
    expect(testProps.onClickAvatar).toHaveBeenCalledTimes(1);
  });

  it("returns correct number of list items", () => {
    expect(wrapper.find("ul").children().length).toBe(2);
  });

  it("calls highlight", () => {
    expect(testProps.highlight).toHaveBeenCalledTimes(2);
  });

  it("calls showspinner", () => {
    expect(testProps.showSpinner).toHaveBeenCalledTimes(2);
  });
});
