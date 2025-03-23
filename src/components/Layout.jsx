import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Box } from "@mui/material";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Box>
    </>
  );
};
