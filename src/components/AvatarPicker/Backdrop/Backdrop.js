import React from "react";
import PropTypes from "prop-types";
import styles from "./Backdrop.css";

const Backdrop = props =>
  props.show ? <div className={styles.Backdrop} onClick={props.hide} /> : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
};
export default Backdrop;
