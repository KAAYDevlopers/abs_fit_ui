import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import { NavigationItems } from "../constants/NavItems";
import _isEmpty from "lodash/isEmpty";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch } from "react-redux";
import clsx from "clsx";
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
import styles from "../styles/components/AppDrawer.module.scss";

interface AppDrawerProps {
  open: boolean;
  anchor: "left" | "right" | "top" | "bottom";
  closeHandler: () => void;
}

const drawerWidth = 240;

const AppDrawer: React.FC<AppDrawerProps> = ({
  open,
  anchor,
  closeHandler,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiDrawer
        open={open}
        anchor={anchor}
        variant="temporary"
        className={clsx(styles.drawer, {
          [styles.open]: open,
          [styles.closed]: !open,
        })}
        classes={{
          paper: clsx({
            [styles.drawerPaper]: true,
            [styles.open]: open,
            [styles.closed]: !open,
          }),
        }}
      >
        <div
          className={styles.drawerHeader}
          style={{ justifyContent: "space-around" }}
        >
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
        </div>
        <Divider />
        <List>
          {NavigationItems.map((item, index) => (
            <ListItem key={index} onClick={closeHandler}>
              {"key" in item ? item.key : item.label}
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </Box>
  );
};

export default AppDrawer;
