"use client";
import Image from "next/image";
import styles from "./page.module.css";
import devImg from "../public/homepage/developer-img.png";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const handleNavigate = () => router.push("/developer-CV");

  // Break the code into styled tokens
  const codeTokens = [
    { text: "let ", className: styles.codeTertiary },
    { text: "unemployedDev = ", className: styles.codeSecondary },
    { text: "true", className: styles.codeTertiary },
    { text: ";\n", className: styles.codeSemiColon },
    { text: "let ", className: styles.codeTertiary },
    { text: "lookForJob", className: styles.codeSecondary },
    { text: ";\n", className: styles.codeSemiColon },
    { text: "let ", className: styles.codeTertiary },
    { text: "pushToLimits", className: styles.codeSecondary },
    { text: ";\n", className: styles.codeSemiColon },
    { text: "\nif (", className: styles.codePrimary },
    { text: "unemployedDev", className: styles.codeSecondary },
    { text: ") {", className: styles.codePrimary },
    { text: "\n  lookForJob = ", className: styles.codeSecondary },
    { text: "true", className: styles.codeTertiary },
    { text: ";\n", className: styles.codeSemiColon },
    { text: "}", className: styles.codePrimary },
    { text: " else {", className: styles.codePrimary },
    { text: "\n  pushToLimits = ", className: styles.codeSecondary },
    { text: "true", className: styles.codeTertiary },
    { text: ";\n", className: styles.codeSemiColon },
    { text: "}", className: styles.codePrimary },
  ];

  const [displayed, setDisplayed] = useState([]);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (tokenIndex < codeTokens.length) {
      const { text, className } = codeTokens[tokenIndex];
      if (charIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const copy = [...prev];
            copy[tokenIndex] = (
              <span key={tokenIndex} className={className}>
                {(copy[tokenIndex]?.props?.children || "") + text[charIndex]}
              </span>
            );
            return copy;
          });
          setCharIndex(charIndex + 1);
        }, 80); // typing speed
        return () => clearTimeout(timeout);
      } else {
        setTokenIndex(tokenIndex + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, tokenIndex, codeTokens]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.devInfo}>
        <Image src={devImg} alt="placeholder alt" />
        <h1>Sopo Bichinashvili</h1>
        <h2>Junior Dev</h2>

        <div className={styles.devDescription}>
          <pre>
            {displayed}
            <span className={styles.cursor}></span>
          </pre>
        </div>

        <Button onclick={handleNavigate}>Know more</Button>
      </div>
    </div>
  );
}
