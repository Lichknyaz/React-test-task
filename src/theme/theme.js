import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    text: { main: "#475467" },
    primary: { main: "#101828" },
    secondary: { main: "#6C717B" },
    lightGray: { main: "#DADDE1" },
    white: { main: "#FFFFFF" },
    rating: { main: "#FFC531" },
    badges: { main: "#F2F4F7" },
    input: { main: "#F7F7F7" },
    button: { main: "#E44848" },
    hover: { main: "#D84343" },
  },
  borders: {
    primary: "1px solid #DADDE1",
    hover: "1px solid #D84343",
    default: "1px solid #DADDE1",
    rounded: "10px",
    roundedInput: "12px",
  },
  typography: {
    textTransform: "none",
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: 16,
    color: "inherit",

    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
    },
    body2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
    },
    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: "32px",
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "32px",
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "24px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFF",
          backgroundColor: "#E44848",
          textTransform: "none",
          fontSize: 16,
          fontWeight: 500,
          lineHeight: "24px",
          letterSpacing: "-0.08px",
          borderRadius: "200px",
          minWidth: "166px",
          minHeight: "56px",
          "&:hover": {
            backgroundColor: "#D84343",
          },
        },
        contained: {
          color: "#FFF",
          backgroundColor: "#E44848",
          "&:hover": {
            backgroundColor: "#D84343",
          },
        },
        outlined: {
          border: "1px solid #DADDE1",
          color: "#E44848",
          "&:hover": {
            backgroundColor: "rgba(228, 72, 72, 0.1)",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#475467",
          transition: "0.3s ease-in-out",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#F7F7F7",
            borderRadius: "12px",
            "& fieldset": {
              border: "none",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#F7F7F7",
          borderRadius: "12px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
        select: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 14px",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#6C717B",
        },
        shrink: {
          color: "#101828",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          gap: "8px",
        },
      },
    },
  },
});
