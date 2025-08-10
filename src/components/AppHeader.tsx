import * as React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../content/ABSOLUTE.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigationItems } from "../constants/NavItems";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Button,
  Divider,
  Typography,
  Menu,
  MenuItem,
  Popover,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MobileNavigationDrawer from "./nav/MobileNavigationDrawer";
import { Search, SearchIconWrapper, StyledInputBase } from "./Search";
import styles from "../styles/components/AppHeader.module.scss";

// DrawerHeader component
const DrawerHeader: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.drawerHeader}>{children}</div>;
};

// StyledMenu component
interface StyledMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const StyledMenu: React.FC<StyledMenuProps> = (props) => {
  return (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      className={styles.styledMenu}
      classes={{
        paper: styles.menuPaper,
        list: styles.menuList,
      }}
      {...props}
    />
  );
};

export default function PrimarySearchAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [navIndex, setNavIndex] = React.useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    if (navIndex === index) {
      setNavIndex(null);
      setAnchorEl(null);
    } else {
      setNavIndex(index);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setNavIndex(null);
    setAnchorEl(null);
    setDrawerOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setNavIndex(index);
    setAnchorEl(event.currentTarget);
  };

  const theme = useTheme();
  const drawerButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ bgcolor: "whitesmoke" }}>
        <Container maxWidth="xl">
          <Toolbar className={styles.toolbar}>
            <IconButton
              size="large"
              ref={drawerButtonRef}
              edge="start"
              color="inherit"
              aria-label="open drawer"
              className={styles.menuButton}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              className={styles.logoImage}
              alt="Your logo."
              src={Logo}
            />
            {isMobile ? null : (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for Products..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
            {isMobile ? null : <Box sx={{ flexGrow: 1 }} />}
            <Box>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={"primary-search-account-menu"}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            sx={{
              width: 250,
              padding: 2,
            }}
          >
            <Typography variant="h6" component="div" gutterBottom>
              Menu
            </Typography>
            <MobileNavigationDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              drawerButtonRef={drawerButtonRef}
            />
          </Box>
        </Drawer>
      </AppBar>
      <Divider />
    </Box>
  );
}
