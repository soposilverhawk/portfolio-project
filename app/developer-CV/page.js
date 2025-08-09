"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { navItems } from "@/data/portfolioListsData";
import devImg from "../../public/homepage/developer-img.png";
import Image from "next/image";
import PortfolioList from "@/components/PortfolioLists/PortfolioList";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <div className={styles.wrapper}>
      <aside className={isMenuOpen ? styles.asideExpanded : styles.asideCollapsed}>
        <div className={isMenuOpen ? styles.menuExpandedDevAvatarContainer : styles.menuCollapsedDevAvatarContainer}>
          <Image src={devImg} alt="placeholder alt" />
          {isMenuOpen && <p>John Doe</p>}
        </div>
        <PortfolioList data={navItems} variant="devInfo" isMenuOpen={isMenuOpen}/>
        <button className={styles.asideToggle} onClick={toggleMenu}>
          <div className={styles.toggleLine}></div>
          <div className={styles.toggleLine}></div>
          <div className={styles.toggleLine}></div>
        </button>
      </aside>
    </div>
  );
}

export default page;
