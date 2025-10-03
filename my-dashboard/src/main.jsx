import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Import MUI theme utilities
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Create a custom theme
const theme = createTheme({
  palette: {
    background: {
      default: "#eef1f5", // light grey-blue page background
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f7fa", // Paper components (tables, cards, etc.)
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap App in ThemeProvider */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
