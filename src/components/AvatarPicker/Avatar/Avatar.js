import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.css";

export const getAvatarStyles = (props, styles) => {
  const { isActive, highlight, showSpinner } = props;
  if (isActive) {
    return styles.ActiveImgWrapper;
  }

  if (!isActive && showSpinner) {
    return styles.SpinningListImgWrapper;
  }

  if (!isActive) {
    return `${styles.ListImgWrapper} ${
      highlight ? styles.HighlightedListImgWrapper : null
    }`;
  }
};

const Avatar = props => {
  const { avatar, onClickAvatar } = props;
  return (
    <div
      tabIndex="0"
      onClick={onClickAvatar}
      onKeyUp={onClickAvatar}
      id={avatar.id}
      className={getAvatarStyles(props, styles)}
    >
      <img className={styles.Img} alt={avatar.label} src={avatar.src} />
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.shape({
    src: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onClickAvatar: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  highlight: PropTypes.bool.isRequired,
  showSpinner: PropTypes.bool.isRequired
};

export default Avatar;
