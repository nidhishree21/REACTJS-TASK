import React from "react";
import { mount } from "enzyme";
import Avatar, { getAvatarStyles } from "./Avatar";

const testProps = {
  avatar: {
    src: "/static/media/avatar1.7467b519.png",
    label: "Avatar 1",
    id: 1
  },
  onClickAvatar: jest.fn(() => {}),
  isActive: true,
  highlight: false,
  showSpinner: false
};

const mountAvatar = (props = {}) => {
  const p = { ...testProps, ...props };
  return mount(<Avatar {...p} />);
};

describe("getAvatarStyles", () => {
  const testStyles = {
    ActiveImgWrapper: "ActiveImgWrapper",
    ListImgWrapper: "ListImgWrapper",
    HighlightedListImgWrapper: "HighlightedListImgWrapper"
  };
  const f = (p, s) => getAvatarStyles(p, s);

  it("returns correct styles for active avatar", () => {
    const s = testStyles.ActiveImgWrapper;
    const p = { ...testProps };
    expect(f(p, testStyles) === s).toBe(true);
  });

  it("returns correct styles for list avatar", () => {
    const s = `${testStyles.ListImgWrapper} ${null}`;
    const p = { ...testProps };
    p.isActive = false;
    expect(f(p, testStyles) === s).toBe(true);
  });

  it("returns correct styles for list avatar", () => {
    const s = `${testStyles.ListImgWrapper} ${
      testStyles.HighlightedListImgWrapper
    }`;
    const p = { ...testProps };
    p.isActive = false;
    p.highlight = true;
    expect(f(p, testStyles) === s).toBe(true);
  });

  it("returns correct styles for list avatar - spinning", () => {
    const s = testStyles.SpinningListImgWrapper;
    const p = { ...testProps };
    p.isActive = false;
    p.showSpinner = true;
    expect(f(p, testStyles) === s).toBe(true);
  });
});

describe("Avatar", () => {
  const wrapper = mountAvatar();

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("calls onClickAvatar function on clicking the active Avatar", () => {
    const avatarToClick = wrapper.find("div");
    avatarToClick.simulate("click");
    expect(testProps.onClickAvatar).toHaveBeenCalledTimes(1);
  });
});
