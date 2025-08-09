"use client"
import React from "react";
import Image from "next/image";
import styles from "./portfolioList.module.css"

function PortfolioList({ data, variant }) {
  return (
    <ul className={styles.portfolioList}>
      {data.map(({ id, desc, icon, alt, link }) => (
        <li key={id} className={variant === "navigation" && styles.infoItem}>
          <Image src={icon} alt={alt}/>
          {desc}
          {link && variant === "contactList" && <span>{link}</span>}
        </li>
      ))}
    </ul>
  );
}

export default PortfolioList;
