import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../content/ABSOLUTE.png";
import UserProfile from "./UserProfile";
import MegaMenu from "./MegaMenu";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import { useTheme } from "@emotion/react";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search";
import SearchIcon from "@mui/icons-material/Search";
import Container from "./Container";

const Navigation = () => {
  const drawerButtonRef = useRef(null);
  const theme = useTheme();
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setClickedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
      }}
    >
      <Container>
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <MegaMenu handleToggle={handleToggle} clicked={clickedIndex} />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Products..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
