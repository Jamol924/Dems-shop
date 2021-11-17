import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { language } from "../../../redux/active/productActions";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Select from "@mui/material/Select";
import L from "../../../locale/language.json";
import { FormControl } from "@mui/material";
import { LogOut } from "../../../pages/sections/MyProfil/Navbar";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Contact from "../../../pages/parts/contact";
import AcountCircle from "./AcountCircle";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function MinNav() {
  const auth = localStorage.getItem("token");
  const lan = useSelector((state) => state.allLanguage);
  const [age, setAge] = useState(localStorage.getItem("language") || "uz");
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(localStorage.removeItem("token"));
    window.location.reload();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const [anchor, setAncho] = React.useState(null);

  const handleClick = (event) => {
    setAncho(event.currentTarget);
  };

  const handleClose = () => {
    setAncho(null);
  };

  const menuId = "primary-search-account-menu";

  return (
    <Fragment>
      <StyledAppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar classNamr="demo">
          <Link style={{ color: "white" }} to="/">
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <HomeIcon color="white" />
            </IconButton>
          </Link>
          <Link style={{ color: "white" }} to="/">
            <IconButton
              style={{ marginLeft: "20px" }}
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
          </Link>
          <Link to="/admen">
            <Fab color="default" aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab>
          </Link>

          <div className={classes.grow} />
          <Link style={{ color: "white" }} to="/searchCard">
            <IconButton style={{ marginRight: "30px" }} color="inherit">
              <SearchIcon />
            </IconButton>
          </Link>
          <Link style={{ color: "white" }} to="/myProfil">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Link>
        </Toolbar>
      </StyledAppBar>
      {auth ? (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem>
            <Link style={{ color: "black" }} to="/My-adds">
              {L.navb.ad[lan]}
            </Link>
          </MenuItem>

          <MenuItem>
            <Link style={{ color: "black" }} to="/admenName">
              {L.navb.set[lan]}
            </Link>
          </MenuItem>
          <MenuItem>
            <LogOut onClick={handleClickOpen}>{L.navb.lout[lan]}</LogOut>
          </MenuItem>
        </Menu>
      ) : (
        <> </>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <StyledFormControl fullWidth>
            <Select
              sx={{ color: "white" }}
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                dispatch(language(e.target.value));
              }}
            >
              <MenuItem value="uz">{L.til.uzbek[lan]}</MenuItem>
              <MenuItem value="ru">{L.til.rus[lan]}</MenuItem>
              <MenuItem value="en">{L.til.eng[lan]}</MenuItem>
            </Select>
          </StyledFormControl>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

const StyledAppBar = styled(AppBar)`
  .MuiToolbar-regular {
    display: none;
    @media (max-width: 550px) {
      display: block;
      display: flex;
    }
  }
`;
export const StyledFormControl = styled(FormControl)`
  .css-1oybtu7-MuiInputBase-root-MuiOutlinedInput-root {
    color: black;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
    color: black;
  }
  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    color: black;
  }
  .css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
    color: white;
  }
`;
