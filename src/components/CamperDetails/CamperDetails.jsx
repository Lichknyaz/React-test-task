import { Box, Typography } from "@mui/material";
import StarIcon from "../../assets/ico-star.svg?react";
import MapIcon from "../../assets/ico-map.svg?react";

function CamperDetails({
  camper: { name, price, rating, location, description, gallery, reviews },
}) {
  return (
    <Box sx={{ mt: "auto", mb: "60px" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, mb: "28px" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h2" color="primary.main">
            {name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: "4px",
            }}
          >
            <Box
              component={StarIcon}
              sx={{
                width: 16,
                height: 16,
              }}
            />
          </Box>
          <Typography variant="body1" color="primary.main" sx={{ mr: "16px" }}>
            {rating} ({reviews.length} Reviews)
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: "4px",
            }}
          >
            <Box
              component={MapIcon}
              sx={{
                width: 16,
                height: 16,
              }}
            />
          </Box>
          <Typography variant="body1" color="primary.main">
            {location}
          </Typography>
        </Box>
        <Box></Box>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Typography variant="h2" color="primary.main">
            {`€${parseFloat(price).toFixed(2)}`}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 6, mb: "28px" }}>
        {gallery.map((image, index) => {
          return (
            <Box
              key={index}
              component="img"
              src={image.thumb}
              alt={name}
              loading="lazy"
              sx={{
                width: "292px",
                height: "320px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          );
        })}
      </Box>

      <Box>
        <Typography color="text.main" variant="body1">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default CamperDetails;
