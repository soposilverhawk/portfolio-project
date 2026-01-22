"use client";
import React, { useState } from "react";
import styles from "./portfolioSection.module.css";
import Image from "next/image";
import { Box } from "@mui/material";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";

function PortfolioSection({ projects, setProjects, projectsEditing }) {
  const [projectEntry, setProjectEntry] = useState({
    name: "",
    img: "",
    ghLink: "",
    description: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProjectEntry = {
      ...projectEntry,
      id: uuidv4(),
    };
    setProjects((prev) => [...prev, newProjectEntry]);
    setProjectEntry({
      name: "",
      img: "",
      ghLink: "",
      description: "",
    });
  };
  return (
    <>
      <Box
        sx={{
          padding: "2rem",
          border: "1px solid #26C17E",
          height: "40rem",
          opacity: projectsEditing ? 1 : 0,
          maxHeight: projectsEditing ? "40rem" : 0,
          transition: "all 0.3s ease",
        }}
      >
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Box>
            <label htmlFor="project-name" className={styles.label}>
              Project Name:
            </label>
            <input
              name="project-name"
              className={styles.input}
              value={projectEntry.name}
              placeholder="Enter project name"
              onChange={(e) =>
                setProjectEntry((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Box>
          <Box>
            <label htmlFor="project-link" className={styles.label}>
              Project Link:
            </label>
            <input
              name="project-link"
              className={styles.input}
              value={projectEntry.ghLink}
              placeholder="Enter project link"
              onChange={(e) =>
                setProjectEntry((prev) => ({ ...prev, ghLink: e.target.value }))
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="project-description" className={styles.label}>
              Describe your project:
            </label>
            <textarea
              name="project-description"
              placeholder="project details..."
              cols={40}
              rows={5}
              value={projectEntry.description}
              onChange={(e) =>
                setProjectEntry((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className={styles.input}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <label htmlFor="project-img" className={styles.label}>
              Project image
            </label>
            <input
              name="project-img"
              type="file"
              accept="image/png, image/jpg"
              onChange={(e) =>
                setProjectEntry((prev) => ({
                  ...prev,
                  img: e.target.files[0]
                    ? URL.createObjectURL(e.target.files[0])
                    : "",
                }))
              }
            />
          </Box>
          <Button variant="regular">Add Project</Button>
        </form>
      </Box>
      <div
        className={
          projectsEditing
            ? styles.portfolioContentContainerEdit
            : styles.portfolioContentContainerNonEdit
        }
      >
        <h3>
          <span className={styles.highlightTxt}>All</span>
          <span> / Code / </span>
          <span className={styles.highlightTxt}>UI</span>
        </h3>
        <Box className={styles.cardsWrapper}>
          {projects.map(({ name, img, id, ghLink, description }) => (
            <a href={ghLink} key={id} target="_blank">
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  {img ? (
                    <Image
                      src={img}
                      alt={`${name} project image`}
                      width={500}
                      height={350}
                    />
                  ) : (
                    <div className={styles.placeholder}>No image</div>
                  )}
                </div>
                <div className={styles.cardBack}>
                  <h4>{name}</h4>
                  <span>{description}</span>
                </div>
              </div>
            </a>
          ))}
        </Box>
      </div>
    </>
  );
}

export default PortfolioSection;
