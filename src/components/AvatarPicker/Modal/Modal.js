import React, { Component } from "react";
import PropTypes from "prop-types";

import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.css";

class Modal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired
  };

  componentDidMount() {
    window.addEventListener("keyup", this.props.hide, false);
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.props.hide, false);
  }
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} hide={this.props.hide} />
        <div
          tabIndex="0"
          className={`${styles.Modal} ${
            this.props.show ? styles.DisplayModal : styles.HideModal
          }`}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
