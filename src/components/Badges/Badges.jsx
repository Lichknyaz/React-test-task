import { Box, Typography } from "@mui/material";
import sprite from "../../assets/filterIcons/filter-icons.svg";

function Badges({ camper }) {
  const categories = [
    "automatic",
    "AC",
    "kitchen",
    "radio",
    "bathroom",
    "refrigerator",
    "microwave",
    "gas",
    "water",
    "TV",
    "engine",
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {categories.map((category) => {
        if (camper[category]) {
          return (
            <Box key={`${camper.id}-${category}`}>
              <Box
                sx={{
                  display: "flex",
                  padding: "12px 18px",
                  borderRadius: "100px",
                  backgroundColor: "badges.main",
                  mixBlendMode: "multiply",
                  gap: 1,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 20,
                    height: 20,
                    color: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="20px" height="20px" stroke="primary.main">
                    <use href={`${sprite}#icon-${category}`} />
                  </svg>
                </Box>
                <Typography color="primary.main" textAlign="center">
                  {category === "engine"
                    ? camper.engine[0].toUpperCase() + camper.engine.slice(1)
                    : category[0].toUpperCase() + category.slice(1)}
                </Typography>
              </Box>
            </Box>
          );
        }
        return null;
      })}
    </Box>
  );
}

export default Badges;
