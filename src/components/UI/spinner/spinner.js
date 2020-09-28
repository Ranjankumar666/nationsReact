import React from "react";
import styles from "./spinner.module.css";

const Spinner = (props) => (
  <div className={styles.ldsRing}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
