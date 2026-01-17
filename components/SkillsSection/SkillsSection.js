"use client";
import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";
import Button from "../Button/Button";
import styles from "./skillsSection.module.css";

function SkillsSection({ variant, skillSet, setSkillSet, skillsEditing }) {
  const [skillName, setSkillName] = useState("");
  const [skillRange, setSkillRange] = useState(1);

  const skills = skillSet.map((entry) => entry.skill);
  const values = skillSet.map((entry) => entry.value);

  const addSkill = () => {
    const newSkillEntry = { skill: skillName, value: skillRange };
    setSkillSet((prevEntries) => [...prevEntries, newSkillEntry]);
    setSkillName("");
    setSkillRange(1);
  };
  return (
    <>
      <Box
        sx={{
          padding: "2rem",
          border: "1px solid #26C17E",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          height: "20rem",
          opacity: skillsEditing ? 1 : 0,
          maxHeight: skillsEditing ? "20rem" : 0,
          transition: "all 0.3s ease",
        }}
      >
        <Box>
          <label htmlFor="name" className={styles.label}>
            Skill name:
          </label>
          <input
            name="name"
            value={skillName}
            placeholder="Enter skill name"
            onChange={(e) => setSkillName(e.target.value)}
            className={styles.input}
          />
        </Box>
        <Box>
          <label htmlFor="range" className={styles.label}>
            Skill range:
          </label>
          <input
            type="number"
            max="10"
            min="1"
            name="range"
            value={skillRange}
            onChange={(e) => setSkillRange(Number(e.target.value))}
            className={styles.input}
          />
        </Box>
        <Button variant="regular" onclick={addSkill}>
          Add Skill
        </Button>
      </Box>
      {variant === "horizontal" ? (
        <BarChart
          layout="horizontal"
          height={300}
          yAxis={[
            {
              scaleType: "band",
              data: skills,
              tickSize: 0, // remove the tick lines
              tickPadding: 8, // space between text and axis
              label: "", // remove axis label
            },
          ]}
          series={[
            {
              data: values,
              color: "#26c17e",
              // barLabelFormatter: ({ index }) => skills[index], // remove bar label
            },
          ]}
          xAxis={[
            {
              min: 0,
              max: 10,
              tickValues: [0, 2, 8, 10],
              valueFormatter: (value) => {
                const labels = {
                  0: "Beginner",
                  2: "Proficient",
                  8: "Expert",
                  10: "Master",
                };
                return labels[value] || "";
              },
            },
          ]}
          sx={{
            // Hide Y axis lines
            ".MuiChartsAxis-left .MuiChartsAxis-line": { display: "none" },
            ".MuiChartsAxis-left .MuiChartsAxis-tick": { display: "none" },
            ".MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              fill: "#000", // make Y axis labels visible
              fontWeight: "bold",
            },
            mt: skillsEditing ? "4rem" : "",
          }}
        />
      ) : (
        <BarChart
          xAxis={[{ data: skills }]}
          yAxis={[
            {
              data: skills,
            },
          ]}
          series={[{ data: values, color: "#26c17e" }]}
          height={300}
          sx={{
            mt: skillsEditing ? "5rem" : "",
          }}
        />
      )}
    </>
  );
}

export default SkillsSection;
