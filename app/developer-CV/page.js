import React from "react";
import styles from "./page.module.css";
import { navItems } from "@/data/portfolioListsData";
import devImg from "../../public/homepage/developer-img.png";
import Image from "next/image";
import PortfolioList from "@/components/PortfolioLists/PortfolioList";

function page() {
  console.log(navItems)
  return (
    <div className={styles.wrapper}>
      <aside>
        <div className={styles.devAvatarContainer}>
          <Image src={devImg} alt="placeholder alt"/>
          <p>John Doe</p>
        </div>
        <PortfolioList data={navItems} variant="navigation"/>
      </aside>
    </div>
  );
}

export default page;
