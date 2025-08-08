import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import { ThemeProvider } from "@emotion/react";
import theme from "./infra/theme";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Navigation from "./components/nav/Navigation";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppHeader />
        <Navigation />
        <MainRouter />
      </Router>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
