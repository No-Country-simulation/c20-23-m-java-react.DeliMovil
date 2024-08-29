import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import AccountMenu from "./PopupMenu";
import "../Styles/Menu.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: 200,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Link to="/">
            <IconButton>
              <img
                className="logo-image"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAtFBMVEX/////2eD/mK7/orb/8vT/s8P/ImP/NWz/JmT/6Oz/QHL/d5b/h6H/PHD/THr/a47/7/L/ztf/LWj/+/H/9+P/vcv/23j/yQD/zSf/5qX/ygD/zB//qbv/xND/1Vj/WYL/2W//jab/2uH/9Nv/6bD/8c//0UT/67v/5qT/zzj//vr/34jl8v2t0PTQ4/kIjecAiudjqu2eyfQdkei51/eIvPD/4pb/aIsAguU3men/nbL1+f5QF5s7AAABRElEQVR4AZXRBY4DMRBE0QoaNkz2TpiZObn/vXbcHUbtE2taJesP/ikQDIXxQSQqhFR4Kyy11uIHb8WEfxBP4B0V1T4RwzvJuDuIpvBGWtJAEO8kaCADZHN4JZ+h7xEUjLGvTuJuIK7x61lbtHhSEjRQRqVorTXPE/TCeBWo0UEWD+o0IBtA0xSLXuF1ozhVbtYqLeQ+N2p7xrRwI8CN6mBZ457RxFX13Ii1PP+g2MFFmRqJEhi67sB6XZxpahTHRdGSSyOOnMdFiyd6YJlzo6t+kS4GcILcKIAbbeMOikP4UtwoiVv8R7j4DzdSo/HVBDmeqAGNc6PpbHoxm6PAE03wgBwspssbs1X2PEHfRQiz5a3pGhuPLrD1L+ICax44m40B6l1BIypEND3aTW/N9i64KRZNE1CHg8JxfWcMp7nZ5PDVH/PFLzlx4bGwAAAAAElFTkSuQmCC"
                alt="logo"
              />
            </IconButton>
          </Link>

          <Search sx={{ flexGrow: 1, mr: 2 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Restaurants"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton
            sx={{ flexGrow: 1 }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <AccountMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
