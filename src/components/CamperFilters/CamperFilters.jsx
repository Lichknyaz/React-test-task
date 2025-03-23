import { Box, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, toggleFilter } from "../../redux/filter/filtersSlice";
import { theme } from "../../theme/theme";
import sprite from "../../assets/filterIcons/filter-icons.svg";

function CamperFilters() {
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
  ];

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleToggle = (category) => {
    dispatch(toggleFilter(category));
  };

  return (
    <Box sx={{ width: "100%", mb: "32px" }}>
      <Typography variant="body2" color="text.main" sx={{ mb: "32px" }}>
        Filters
      </Typography>
      <Typography variant="h3">Vehicle equipment</Typography>
      <Divider sx={{ mt: 3, mb: 3, borderColor: "lightGray.main" }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
        {categories.map((category) => (
          <Box
            key={category}
            onClick={() => handleToggle(category)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "112px",
              height: "96px",
              border: theme.borders.primary,
              borderRadius: theme.borders.roundedInput,
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "-0.08px",
              cursor: "pointer",
              borderColor:
                filters[category] ||
                (category === "automatic" &&
                  filters.transmission === "automatic")
                  ? "button.main"
                  : "lightGray.main",
              transition: "ease-out 0.3s",
            }}
          >
            <Box
              component="span"
              sx={{ width: 32, height: 32, color: "secondary.main" }}
            >
              <svg width="32" height="32" stroke="primary.main">
                <use href={`${sprite}#icon-${category}`} />
              </svg>
            </Box>
            <Typography color="primary.main" textAlign="center">
              {category[0].toUpperCase() + category.slice(1)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CamperFilters;
