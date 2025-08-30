"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { navItems } from "@/data/portfolioListsData";
import devImg from "../../public/homepage/developer-img.jpeg";
import Image from "next/image";
import PortfolioList from "@/components/PortfolioLists/PortfolioList";
import GoBackButton from "../../components/Button/Button";
import { useRouter } from "next/navigation";
import ProfileSections from "@/components/ProfileSections/ProfileSections";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const password = prompt("Enter password for owner access:");
    if (password === process.env.NEXT_PUBLIC_OWNER_PASSWORD) {
      setIsOwner(true);
    }
    setCheckedPassword(true);
  }, [])

  if (!checkedPassword) return null;

  return (
    <div className={styles.container}>
      <aside
        className={isMenuOpen ? styles.asideExpanded : styles.asideCollapsed}
      >
        <div className={styles.devInfoWrapper}>
          <div
            className={
              isMenuOpen
                ? styles.menuExpandedDevAvatarContainer
                : styles.menuCollapsedDevAvatarContainer
            }
          >
            <Image src={devImg} alt="placeholder alt" />
            {isMenuOpen && <h1>Sopo Bichinashvili</h1>}
          </div>
          <PortfolioList
            data={navItems}
            variant="devInfo"
            isMenuOpen={isMenuOpen}
          />
        </div>
        <button className={styles.asideToggle} onClick={toggleMenu}>
          <div className={styles.toggleLine}></div>
          <div className={styles.toggleLine}></div>
          <div className={styles.toggleLine}></div>
        </button>
        <GoBackButton
          variant="goBack"
          isMenuOpen={isMenuOpen}
          onclick={() => router.push("/")}
        >
          <div
            className={
              isMenuOpen
                ? styles.menuExpandedReturn
                : styles.menuCollapsedReturn
            }
          ></div>
          {isMenuOpen && "Go back"}
        </GoBackButton>
      </aside>
      <main className={styles.CVSectionsContainer}>
       <ProfileSections isOwner={isOwner}/>
      </main>
    </div>
  );
}

export default page;
