"use client";
import React from "react";
import Image from "next/image";
import styles from "./portfolioList.module.css";
import { useTranslation } from "react-i18next";

function PortfolioList({ data, variant, isMenuOpen = null }) {
  const { t } = useTranslation();
  return (
    <ul
      className={
        variant === "devInfo" ? styles.portfolioList : styles.contactList
      }
    >
      {data.map(({ id, key, icon, desc, alt, link }) => (
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
          {variant === "devInfo" ? (
            <Image
              src={icon}
              alt={alt}
              width={16}
              style={{ filter: "grayscale(1) brightness(0) invert(1)" }}
            />
          ) : (
            <Image src={icon} alt={alt} />
          )}
          {variant === "devInfo" && isMenuOpen && (
            <a href={`#${key}`} className={styles.devInfoListLink}>
              {t(
                key === "portfolio"
                  ? `cv_sections.${key}.title`
                  : `cv_sections.${key}`,
              )}
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
