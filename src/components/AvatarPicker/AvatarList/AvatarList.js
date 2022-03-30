import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";
import "./AvatarList.css";

const AvatarList = props => {
  return (
    <ul>
      {props.avatars.map(avatar => {
        return (
          <li key={avatar.id}>
            <Avatar
              avatar={avatar}
              onClickAvatar={props.onClickAvatar}
              isActive={props.isActive}
              highlight={props.highlight(avatar.id)}
              showSpinner={props.showSpinner(avatar.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

AvatarList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickAvatar: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  highlight: PropTypes.func.isRequired,
  showSpinner: PropTypes.func.isRequired
};

export default AvatarList;
