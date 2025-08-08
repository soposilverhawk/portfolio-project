import React from 'react';
import styles from "./button.module.css";

function Button({children, onclick}) {
  return (
    <button className={styles.button} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
