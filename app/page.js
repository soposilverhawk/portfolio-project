import Image from "next/image";
import styles from "./page.module.css";
import devImg from "../public/homepage/developer-img.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.devInfo}>
        <Image src={devImg} alt="placeholder alt"/>
        <h1>John Doe</h1>
        <h2>Programmer. Creative. Innovator</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        </p>
        <Button>Know more</Button>
      </div>
    </div>
  );
}
