"use client"
import React from "react";
import Image from "next/image";
import styles from "./portfolioList.module.css"

function PortfolioList({ data, variant, isMenuOpen=null }) {
  console.log(isMenuOpen)
  return (
    <ul className={styles.portfolioList}>
      {data.map(({ id, desc, icon, alt, link }) => (
        <li key={id} className={(variant === "devInfo" && isMenuOpen) ? styles.menuExpandedInfoItem : styles.menuCollapsedInfoItem}>
          <Image src={icon} alt={alt}/>
          {variant === "devInfo" && isMenuOpen && desc}
          {link && variant === "contactList" && <span>{link}</span>}
        </li>
      ))}
    </ul>
  );
}

export default PortfolioList;
