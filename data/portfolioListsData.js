"use client";
import { v4 as uuidv4 } from "uuid";
import avatarIcon from "../public/portfolioPage/navIcons/avatar-icon.png";
import contactsIcon from "../public/portfolioPage/navIcons/contacts-icon.png";
import educationIcon from "../public/portfolioPage/navIcons/education-icon.png";
import experienceIcon from "../public/portfolioPage/navIcons/experience-icon.png";
import feedbacksIcon from "../public/portfolioPage/navIcons/feedbacks-icon.png";
import skillsIcon from "../public/portfolioPage/navIcons/skills-icon.png";
import portfolioIcon from "../public/portfolioPage/navIcons/suitcase-icon.png";
import phoneIcon from "../public/portfolioPage/contactIcons/phone-icon.png";
import emailIcon from "../public/portfolioPage/contactIcons/email-icon.png";
import twitterIcon from "../public/portfolioPage/contactIcons/twitter-icon.png";
import facebookIcon from "../public/portfolioPage/contactIcons/facebook-icon.png";

export const navItems = [
  {
    id: uuidv4(),
    desc: "About me",
    icon: avatarIcon,
    alt: "avatar icon",
  },
  {
    id: uuidv4(),
    desc: "Education",
    icon: educationIcon,
    alt: "graduation coat icon",
  },
  {
    id: uuidv4(),
    desc: "Experience",
    icon: experienceIcon,
    alt: "pen icon",
  },
  {
    id: uuidv4(),
    desc: "Skills",
    icon: skillsIcon,
    alt: "diamond icon",
  },
  {
    id: uuidv4(),
    desc: "Portfolio",
    icon: portfolioIcon,
    alt: "suitcase icon",
  },
  {
    id: uuidv4(),
    desc: "Contacts",
    icon: contactsIcon,
    alt: "cursor icon",
  },
  {
    id: uuidv4(),
    desc: "Feedbacks",
    icon: feedbacksIcon,
    alt: "chatbubble icon",
  },
];

export const contactItems = [
  {
    id: uuidv4(),
    desc: "555 01 05 37",
    icon: phoneIcon,
    alt: "telephone icon",
  },
  {
    id: uuidv4(),
    desc: "darkness24lol@gmail.com",
    icon: emailIcon,
    alt: "email icon",
  },
  {
    id: uuidv4(),
    desc: "Twitter",
    icon: twitterIcon,
    link: "https://x.com/",
    alt: "Twitter logo",
    // modify to match your own
  },
  {
    id: uuidv4(),
    desc: "Facebook",
    icon: facebookIcon,
    link: "https://www.facebook.com/sophia.martell.33/",
    alt: "Facebook logo",
  },
];
