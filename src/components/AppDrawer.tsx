import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import { NavigationItems } from "../constants/NavItems";
// import { useHistory } from 'react-router-dom';
import _isEmpty from "lodash/isEmpty";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch } from "react-redux";
// import { actions } from '../../redux/Slice/SubNavDashboardSlice';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";

interface AppDrawerProps {
  open: boolean;
  anchor: "left" | "right" | "top" | "bottom";
  closeHandler: () => void;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden" as const,
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden" as const,
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface DrawerProps {
  open: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<DrawerProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppDrawer: React.FC<AppDrawerProps> = ({
  open,
  anchor,
  closeHandler,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={true} anchor={anchor}>
        <DrawerHeader sx={{ justifyContent: "space-around" }}>
          {open && (
            <>
              <Typography
                variant="h6"
                fontWeight="bold"
                component="p"
                color={"primary"}
              >
                MENU
              </Typography>
              <IconButton color="primary" onClick={closeHandler}>
                {theme.direction === "rtl" ? (
                  <ArrowForwardIcon />
                ) : (
                  <ArrowBackIcon />
                )}
              </IconButton>
            </>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {NavigationItems.map((item, index) => (
            <ListItem key={index} onClick={closeHandler}>
              {"key" in item ? item.key : item.label}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
