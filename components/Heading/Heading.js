import React from "react";
import styles from "./heading.module.css";
import editIcon from "../../public/edit-icon.png";

function Heading({ children }) {
  return (
    <div style={styles.headlineContainer}>
      <h2 style={styles.headline}>{children}</h2>
      <button>
        <Image src={editIcon} alt="editing pen" />
      </button>
    </div>
  );
}

export default Heading;
