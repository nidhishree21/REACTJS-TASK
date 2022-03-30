import React from "react";
import styles from "./Layout.css";

const Layout = props => <main className={styles.Layout}>{props.children}</main>;

export default Layout;
