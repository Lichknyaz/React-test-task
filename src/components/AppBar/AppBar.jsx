import LogoIcon from "../../assets/logo.svg?react";
import Box from "@mui/material/Box";
import { Link, Toolbar, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

function AppBar() {
  const location = useLocation();
  return (
    <Box sx={{ bgcolor: "input.main", borderColor: "badges.main" }}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <Toolbar
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
            padding: "24px 0",
          }}
        >
          <Link component={NavLink} to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "64px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Box
                component={LogoIcon}
                sx={{
                  width: 136,
                  height: 16,
                }}
              />
            </Box>
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Link component={NavLink} to="/">
              <Typography
                variant="body2"
                sx={{
                  color:
                    location.pathname === "/" ? "hover.main" : "primary.main",
                }}
              >
                Home
              </Typography>
            </Link>
            <Link component={NavLink} to="/catalog">
              <Typography
                variant="body2"
                sx={{
                  color: location.pathname.includes("/catalog")
                    ? "hover.main"
                    : "primary.main",
                }}
              >
                Catalog
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
}

export default AppBar;
