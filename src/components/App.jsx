import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme/theme";
import { Typography } from "@mui/material";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../pages/CamperPage/CamperPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />
          <Route
            path="*"
            element={
              <Typography variant="h3" align="center">
                Page not found
              </Typography>
            }
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
