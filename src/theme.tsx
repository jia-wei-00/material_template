import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A27B5C",
    },
    secondary: {
      main: "#2C3639",
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: "#FFFFFF",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#3F4E4F",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#3F4E4F",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#A0937D",
    },
    secondary: {
      main: "#F6E6CB",
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: "#FFFFFF",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#A27B5C",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#DCD7C9",
        },
      },
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});
