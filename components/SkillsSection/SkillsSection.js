import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";


function SkillsSection() {
  const skills = ["HTML", "CSS", "jQuery", "PHP", "Laravel 2 (framework)"];
  const values = [10, 7, 6, 4, 3]; // skill levels

  return (
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
        }}
      />
  );
}

export default SkillsSection;
