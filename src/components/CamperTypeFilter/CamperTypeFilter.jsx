import { useDispatch, useSelector } from "react-redux";
import { selectFilters, toggleForm } from "../../redux/filter/filtersSlice";
import { Box, Divider, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import sprite from "../../assets/filterIcons/filter-icons.svg";

function CamperTypeFilter() {
  const dispatch = useDispatch();

  const filteredForm = useSelector(selectFilters).form;

  const forms = {
    alcove: "Alcove",
    fullyIntegrated: "Fully Integrated",
    panelTruck: "Van",
  };
  return (
    <Box sx={{ width: "100%", mb: "40px" }}>
      <Typography variant="h3">Vehicle type</Typography>
      <Divider sx={{ mt: 3, mb: 3, borderColor: "lightGray.main" }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
        {Object.entries(forms).map(([key, value]) => (
          <Box
            key={key}
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
              borderColor:
                filteredForm === key ? "button.main" : "lightGray.main",
              cursor: "pointer",
              transition: "ease-out 0.3s",
            }}
            onClick={() => dispatch(toggleForm(key))}
          >
            <Box
              component="span"
              sx={{ width: 32, height: 32, color: "secondary.main" }}
            >
              <svg width="32" height="32" stroke="primary.main">
                <use href={`${sprite}#icon-${key}`} />
              </svg>
            </Box>
            <Typography color="primary.main" textAlign="center">
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CamperTypeFilter;
