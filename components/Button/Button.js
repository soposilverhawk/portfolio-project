import React from "react";
import styles from "./button.module.css";

function Button({ children, onclick, variant = "regular", isMenuOpen = null }) {
  let className = "";

  if (variant === "regular") {
    className = styles.buttonRegular;
  } else if (variant === "goBack") {
    className = isMenuOpen
      ? styles.menuExpandedButtonGoBack
      : styles.menuCollapsedButtonGoBack;
  } else {
    // fallback class or leave empty
    className = "";
  }

  return (
    <button className={className} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
