"use client";
import React from "react";
import Image from "next/image";
import styles from "./portfolioList.module.css";

function PortfolioList({ data, variant, isMenuOpen = null }) {
  const formatListItem = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <ul className={variant === "devInfo" ? styles.portfolioList : styles.contactList}>
      {data.map(({ id, desc, icon, alt, link }) => (
        <li
          key={id}
          className={
            variant === "devInfo"
              ? isMenuOpen
                ? styles.menuExpandedInfoItem
                : styles.menuCollapsedInfoItem
              : variant === "contactList"
              ? styles.contactItem
              : ""
          }
        >
          {/* <Image src={icon} alt={alt} />
          {variant === "devInfo" && isMenuOpen && desc} */}
          <Image src={icon} alt={alt} />
          {variant === "devInfo" && isMenuOpen && (
            <a href={`#${desc}`} className={styles.devInfoListLink}>
              {formatListItem(desc)}
            </a>
          )}
          {variant === "contactList" && (
            <p>
              <span className={styles.contactDesc}>{desc}</span>
              {link && (
                <a href={link} target="_blank">
                  {link}
                </a>
              )}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default PortfolioList;
