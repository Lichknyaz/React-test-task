import { Box, Button, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme/theme";
import Badges from "../Badges/Badges";

import FavoriteIcon from "../../assets/ico-favorite.svg?react";
import StarIcon from "../../assets/ico-star.svg?react";
import MapIcon from "../../assets/ico-map.svg?react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  toggleFavorites,
} from "../../redux/favorites/favoritesSlice";

function CamperCard({ camper }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(favorites.includes(camper.id));
  }, [favorites, camper.id]);

  const handleFavorite = () => {
    dispatch(toggleFavorites(camper.id));
  };

  return (
    <Box
      width="100%"
      minHeight="368px"
      display="flex"
      gap={3}
      sx={{
        border: theme.borders.primary,
        borderRadius: theme.borders.rounded,
        padding: "24px",
      }}
    >
      <Box
        component="img"
        src={camper.gallery[0].thumb}
        alt={camper.name}
        loading="lazy"
        sx={{
          width: "292px",
          height: "320px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "524px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h2" color="primary.main">
              {camper.name}
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Typography variant="h2" color="primary.main">
                {`€${parseFloat(camper.price).toFixed(2)}`}
              </Typography>
              <IconButton
                onClick={() => handleFavorite()}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                <Box
                  component={FavoriteIcon}
                  stroke={
                    isFavorite
                      ? theme.palette.button.main
                      : theme.palette.primary.main
                  }
                  sx={{
                    width: 26,
                    height: 24,
                    strokeWidth: 1,
                  }}
                />
              </IconButton>
            </Box>
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
            <Typography
              variant="body1"
              color="primary.main"
              sx={{ mr: "16px" }}
            >
              {camper.rating} ({camper.reviews.length} Reviews)
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
              {camper.location}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {camper.description}
          </Typography>
        </Box>
        <Box>
          <Badges camper={camper} />
        </Box>
        <Box>
          <Button component={NavLink} to={`/catalog/${camper.id}`}>
            Show more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CamperCard;
