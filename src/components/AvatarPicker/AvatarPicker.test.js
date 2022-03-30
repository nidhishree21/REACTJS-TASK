import React from "react";
import { shallow } from "enzyme";
import AvatarPicker from "./AvatarPicker";

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
  ]
};

describe("AvatarPicker", () => {
  const wrapper = shallow(<AvatarPicker {...testProps} />);
  it("renders AvatarPicker correctly", () => {
    expect(wrapper).toMatchSnapshot("Initial Render");
  });
});

describe("onClickListAvatar", () => {
  const wrapper = shallow(<AvatarPicker {...testProps} />);

  it("renders the view with updated Active Avatar", async () => {
    // before vs after - change in active Avatar props.
    expect(wrapper).toMatchSnapshot("1. Before clicking an avatar in the list");
    await wrapper.instance().onClickListAvatar({
      type: "click",
      target: { id: 2 },
      preventDefault: jest.fn(() => {})
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot("2. After clicking an avatar in the list");
  });
});

describe("onClickActiveAvatar", () => {
  const wrapper = shallow(<AvatarPicker {...testProps} />);
  // before vs after - change in Modal props.
  it("renders the view with Modal", async () => {
    expect(wrapper).toMatchSnapshot("1. Before clicking active avatar");
    await wrapper.instance().onClickActiveAvatar({
      type: "click",
      preventDefault: jest.fn(() => {})
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot("2. After clicking active avatar");
  });
});

describe("onCloseModal", () => {
  const wrapper = shallow(<AvatarPicker {...testProps} />);
  // before vs after - change in Modal props.
  it("hides Modal from the view", async () => {
    //display Modal first
    await wrapper.instance().onClickActiveAvatar({
      type: "click",
      preventDefault: jest.fn(() => {})
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot("1. Before hiding Modal");
    //hide Modal
    await wrapper.instance().onCloseModal({
      type: "click",
      preventDefault: jest.fn(() => {})
    });
    wrapper.update();
    expect(wrapper).toMatchSnapshot("2. After hiding Modal");
  });
});
