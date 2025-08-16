"use client";
import React from "react";
import Image from "next/image";
import styles from "./portfolioList.module.css";

function PortfolioList({ data, variant, isMenuOpen = null }) {
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
          <Image src={icon} alt={alt} />
          {variant === "devInfo" && isMenuOpen && desc}
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
