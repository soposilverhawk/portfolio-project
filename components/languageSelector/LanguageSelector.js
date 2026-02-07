import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KA from "../../public/portfolioPage/languageIcons/georgia-flag.png";
import EN from "../../public/portfolioPage/languageIcons/great-britan-flag.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const handleChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#26c17e", // your color
            },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#26c17e",
          },
        }}
      >
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={i18n.language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="en" selected>
            <Image src={EN} alt="English" style={{ marginRight: "0.5rem" }} />
            English
          </MenuItem>
          <MenuItem value="ka">
            <Image src={KA} alt="Georgian" style={{ marginRight: "0.5rem" }} />
            Georgian
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
