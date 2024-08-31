import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  Divider,
  MenuItem,
  Toolbar,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Styled components
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: "0 auto", // Center horizontally
  width: "100%",
  maxWidth: 400, // Limit the max width for better appearance
  [theme.breakpoints.up("sm")]: {
    margin: "0 auto",
    width: "auto",
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

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Estado de autenticación

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ padding: 0 }}
              >
                <Link to="/">
                  <Box
                    component="img"
                    src="https://i.postimg.cc/63jMhwjz/delimovil-transparent.png"
                    border="0"
                    alt="delimovil-transparent"
                    sx={{ height: 50 }}
                  />
                </Link>
              </Button>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Restaurants"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Button variant="text" color="info" size="small">
                Categorias
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {isAuthenticated ? (
              <>
                <Button color="primary" variant="text" size="small">
                  My profile
                </Button>
                <Button color="primary" variant="contained" size="small">
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button color="primary" variant="text" size="small">
                  Sign in
                </Button>
                <Button color="primary" variant="contained" size="small">
                  Sign up
                </Button>
              </>
            )}
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>Hola</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                {isAuthenticated ? (
                  <>
                    <MenuItem>
                      <Button color="primary" variant="contained" fullWidth>
                        Sign out
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button color="primary" variant="text" fullWidth>
                        My profile
                      </Button>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <Button color="primary" variant="contained" fullWidth>
                        Sign up
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button color="primary" variant="outlined" fullWidth>
                        Sign in
                      </Button>
                    </MenuItem>
                  </>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
