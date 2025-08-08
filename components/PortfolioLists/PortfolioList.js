"use client"
import React from "react";
import Image from "next/image";

function PortfolioList({ data, variant }) {
  return (
    <ul>
      {data.map(({ id, desc, icon, alt, link }) => (
        <li key={id}>
          <Image src={icon} alt={alt} />
          {desc}
          {link && variant === "contactList" && <span>{link}</span>}
        </li>
      ))}
    </ul>
  );
}

export default PortfolioList;
