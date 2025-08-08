// NavigationBar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { NavigationItems } from "../constants/NavItems";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar>
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            NavigationItems.map((item) => {
              return (
                <Button color="inherit">
                  {"key" in item ? item.key : item.label}
                  {"values" in item && item.values && (
                    <IconButton
                      size="small"
                      edge="end"
                      color="inherit"
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  )}
                </Button>
              );
            })
          )}
        </Toolbar>
        <Drawer anchor="left" open={false} onClose={handleDrawerClose}>
          <List>
            {NavigationItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={handleDrawerClose}>
                  {"key" in item ? item.key : item.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
