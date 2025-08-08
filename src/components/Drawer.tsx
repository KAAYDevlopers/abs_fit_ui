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

interface CustomDrawerProps {
  open?: boolean;
}

interface MiniDrawerProps {
  open: boolean;
  anchor: string;
  closeHandler: () => void;
}

interface ExpandState {
  status: boolean;
  index?: number;
}

// Simple navigation structure for the drawer
interface DrawerNavigationItem {
  label: string;
  href?: string;
  subCat?: DrawerNavigationItem[];
}

// Convert category-based navigation to drawer navigation format
const drawerNavigationItems: DrawerNavigationItem[] = NavigationItems.map(
  (item) => {
    // Type guard to check if item is NavigationItemWithCategory
    if ("key" in item && "values" in item) {
      return {
        label: item.key,
        href: `/${item.key.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
        subCat: item.values.map((value: string) => ({
          label: value,
          href: `/${item.key.toLowerCase().replace(/[^a-z0-9]/g, "-")}/${value
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "-")}`,
        })),
      };
    } else {
      // Handle NavigationItemWithLink case
      return {
        label: item.label,
        href: item.href,
        subCat: item.subCat,
      };
    }
  }
);

const drawerWidth = 240;

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
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

const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));
const MiniDrawer: React.FC<MiniDrawerProps> = ({
  open,
  anchor,
  closeHandler,
}) => {
  const theme = useTheme();
  //   const history = useHistory();
  const [expand, setExpand] = useState<ExpandState>({ status: false });
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    setExpand({ ...expand, status: false });
    closeHandler();
  };

  //   const checkSelected = (item, level) => {
  //     return window.location.pathname === `${item.href}dashboard`
  //       ? true
  //       : window.location.pathname.split('/')[level] ===
  //           item.href.split('/')[level];
  //   };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledDrawer open={open}>
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
              <IconButton color="primary" onClick={handleDrawerClose}>
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
        <List aria-label="side-nav" component="nav" disablePadding>
          {drawerNavigationItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
              }}
            >
              <Tooltip title={item.label} placement="right">
                <ListItemButton
                  divider
                  //   selected={checkSelected(item, 1)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {
                    if (!_isEmpty(item.subCat)) {
                      setExpand({
                        status: expand.index === index ? !expand.status : true,
                        index,
                      });
                      //   setOpen(true);
                    } else {
                      setExpand({ ...expand, status: false });
                      //   setOpen(false);
                      //   history.push(item.href);
                    }
                  }}
                >
                  <ListItemText
                    primary={
                      item.label.length > 25
                        ? `${item.label.substring(0, 25)}...`
                        : item.label
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
              {!_isEmpty(item.subCat) &&
                expand.status &&
                expand.index === index && (
                  <List>
                    {item.subCat?.map((subItem, index) => (
                      <ListItem
                        key={subItem.label + index}
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <ListItemButton
                          divider
                          //   selected={checkSelected(subItem, 2)}
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                          onClick={() => {
                            if (subItem.href) {
                              //dispatch(actions.SET_SUB_NAVS(subItem));
                            }
                            // setOpen(false);
                            setExpand({ ...expand, status: false });
                            // history.push(subItem.href);
                          }}
                        >
                          <ListItemText
                            primary={subItem.label}
                            sx={{ opacity: open ? 1 : 0, ml: "3rem" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                )}
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </Box>
  );
};

export default MiniDrawer;
