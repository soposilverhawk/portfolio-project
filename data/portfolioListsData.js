"use client";
import { v4 as uuidv4 } from "uuid";
import avatarIcon from "../public/portfolioPage/navIcons/avatar-icon.png";
import contactsIcon from "../public/portfolioPage/navIcons/contacts-icon.png";
import educationIcon from "../public/portfolioPage/navIcons/education-icon.png";
import experienceIcon from "../public/portfolioPage/navIcons/experience-icon.png";
import feedbacksIcon from "../public/portfolioPage/navIcons/feedbacks-icon.png";
import skillsIcon from "../public/portfolioPage/navIcons/skills-icon.png";
import portfolioIcon from "../public/portfolioPage/navIcons/suitcase-icon.png";
import softSkillsIcon from "../public/portfolioPage/navIcons/softSkills-icon.png";
import languagesIcon from "../public/portfolioPage/navIcons/languages-icon.png";

export const navItems = [
  {
    id: uuidv4(),
    desc: "about me",
    icon: avatarIcon,
    alt: "avatar icon",
  },
  {
    id: uuidv4(),
    desc: "education",
    icon: educationIcon,
    alt: "graduation coat icon",
  },
  {
    id: uuidv4(),
    desc: "experience",
    icon: experienceIcon,
    alt: "pen icon",
  },
  {
    id: uuidv4(),
    desc: "tech skills",
    icon: skillsIcon,
    alt: "diamond icon",
  },
  {
    id: uuidv4(),
    desc: "portfolio",
    icon: portfolioIcon,
    alt: "suitcase icon",
  },
  {
    id: uuidv4(),
    desc: "soft skills",
    icon: softSkillsIcon,
    alt: "silhouette of a man thinking",
  },
  {
    id: uuidv4(),
    desc: "languages",
    icon: languagesIcon,
    alt: "language textbox",
  },
  {
    id: uuidv4(),
    desc: "contacts",
    icon: contactsIcon,
    alt: "cursor icon",
  },
  {
    id: uuidv4(),
    desc: "feedbacks",
    icon: feedbacksIcon,
    alt: "chatbubble icon",
  },
];
