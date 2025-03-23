import { Box, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Badges from "../Badges/Badges";
function Features({ camperDetails: camper }) {
  const features = [
    { label: "Form", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  const formatValue = (value) => {
    switch (value) {
      case "fullyIntegrated":
        return "Fully Integrated";
      case "alcove":
        return "Alcove";
      case "panelTruck":
        return "Van";
      default:
        return value;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Badges camper={camper} />
      <Box>
        <Typography variant="h3">Vehicle details</Typography>
        <Divider sx={{ mt: 3, mb: 3, borderColor: "lightGray.main" }} />

        <Stack sx={{ gap: 2, flexGrow: 1, mt: "auto" }} color="primary.main">
          {features.map((feature) => (
            <Box
              key={feature.label}
              sx={{ textAlign: "center", display: "flex", width: "100%" }}
            >
              <Typography variant="body1">{feature.label}</Typography>
              <Typography variant="body1" sx={{ marginLeft: "auto" }}>
                {formatValue(feature.value)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Features;
