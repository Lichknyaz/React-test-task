import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import hero from "../../assets/homePage/Hero.jpg";

function HomePage() {
  return (
    <Box
      sx={{
        padding: "0 64px",
        backgroundImage: `url(${hero})`,
        height: "calc(100vh - 72px)",
        width: "100%",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" sx={{ color: "input.main", mb: 2 }}>
          Campers of your dreams
        </Typography>
        <Typography variant="h2" sx={{ color: "input.main", mb: 5 }}>
          You can find everything you want in our catalog
        </Typography>
        <Button component={NavLink} to={`/catalog`}>
          View More
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
