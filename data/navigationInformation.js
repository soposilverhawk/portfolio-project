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
    key: "about",
    icon: avatarIcon,
    alt: "avatar icon",
  },
  {
    id: uuidv4(),
    key: "education",
    icon: educationIcon,
    alt: "graduation coat icon",
  },
  {
    id: uuidv4(),
    key: "experience",
    icon: experienceIcon,
    alt: "pen icon",
  },
  {
    id: uuidv4(),
    key: "techSkills",
    icon: skillsIcon,
    alt: "diamond icon",
  },
  {
    id: uuidv4(),
    key: "portfolio",
    icon: portfolioIcon,
    alt: "suitcase icon",
  },
  {
    id: uuidv4(),
    key: "softSkills",
    icon: softSkillsIcon,
    alt: "silhouette of a man thinking",
  },
  {
    id: uuidv4(),
    key: "languages",
    icon: languagesIcon,
    alt: "language textbox",
  },
  {
    id: uuidv4(),
    key: "contacts",
    icon: contactsIcon,
    alt: "cursor icon",
  },
  {
    id: uuidv4(),
    key: "feedbacks",
    icon: feedbacksIcon,
    alt: "chatbubble icon",
  },
];
