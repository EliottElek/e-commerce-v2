import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Drawer,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";
const PrimarySearchAppBar = ({ totalItems }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const links = [
    { label: "Boutique", path: "/boutique", class: classes.links },
    { label: "À propos", path: "/a-propos", class: classes.links },
    { label: "Contact", path: "/contact", class: classes.links },
  ];
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <Typography variant="h6" className={classes.logoTitle}>
            E-commerce
          </Typography>
        </Typography>
        <div className={classes.button}>
          <IconButton
            component={Link}
            to="/connexion"
            aria-label="logIn"
            color="inherit"
          >
            <Badge color="secondary">
              <AccountCircle />
            </Badge>
          </IconButton>
        </div>
        <div className={classes.buttonMobile}>
          <IconButton
            component={Link}
            to="/panier"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
        {/* )} */}
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          {getDrawerChoices(links, classes.mobileLinks, handleDrawerClose)}
        </Drawer>
      </Toolbar>
    );
  };
  const getDrawerChoices = (links, classMode, handleDrawerClose) => (
    <div className={classMode}>
      {links.map((link) => {
        return (
          <Link
            {...{
              to: link.path,
              className: link.class,
              key: link.label,
              onClick: handleDrawerClose,
            }}
          >
            <MenuItem>{link.label}</MenuItem>
          </Link>
        );
      })}
    </div>
  );
  const displayDesktop = () => (
    <Toolbar>
      <Typography
        component={Link}
        to="/"
        variant="h6"
        className={classes.title}
        color="inherit"
      >
        <Typography variant="h4" className={classes.logoTitle}>
          E-commerce
        </Typography>
      </Typography>
      <div className={classes.grow} />
      {getDrawerChoices(links, classes.desktopLinks)}
      <div className={classes.button}>
        <IconButton
          component={Link}
          to="/connexion"
          aria-label="logIn"
          color="inherit"
        >
          <Badge color="secondary">
            <AccountCircle />
          </Badge>
        </IconButton>
      </div>
      <div className={classes.button}>
        <IconButton
          component={Link}
          to="/panier"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </Toolbar>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
