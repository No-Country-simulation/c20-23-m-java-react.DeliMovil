import { createTheme } from "@mui/material";

const THEME = createTheme({
  mode: "light",
  palette: {
    common: {
      black: "#030302",
      grey: "#757575",
      greyPastel: "#A5A5A5",
      lightGrey: "#D9D9D9"
    },
    primary: {
      main: "#2C015F",
      contrastText: "#ffffff",
    },
    primary_card: {
      main: "#7209B7",
      contrastText: "#ffffff",
    },
    primary_white:{
      main: "#ffffff",
      contrastText: "#543A73",
    },
    secondary: {
      main: "#80659F",
      contrastText: "#ffffff",
    },
    secondary_variant:{
      main: '#543A73',
      contrastText: "#ffffff",
    },
    primary_highlight:{
      main: '#F72585',
      contrastText: "#ffffff",
    },
    selected: {
      main: "#DBC2A9",
      contrastText: "#ffffff",
    },
    page: {
      main: "#fff",
      contrastText: "#030302",
    },
    background: {
      default: "#EEEAEF",
      page: "#E0E0E0",
      pastel: "#E3DEDA",
      grayPastel: "#A5A5A5",
      darkPastel: "#2E2E2D",
    },
    button: {
      dark: "#666666",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    h1: {
      fontWeight: 400,
      fontSize: "34px",
      lineHeight: "50px",
    },
    h2: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "30px",
    },
    h3: {
      fontHeight: 400,
      fontSize: "22",
      lineHeight: "28px",
    },
    h4: {
      fontHeight: 400,
      fontSize: "14px",
      lineWeight: "16px",
    },
    h5: {
      fontWeight: 400,
      fontSize: "8px",
      lineWeight: "10px",
    },
    textButton: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
    },
  },
});
export default THEME;
