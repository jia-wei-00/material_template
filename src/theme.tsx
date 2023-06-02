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
      main: "#A27B5C",
    },
    secondary: {
      main: "#2C3639",
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: "#808080",
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
          backgroundColor: "#DCD7C9",
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
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "#e9e0d1",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#e9e0d1",
        },
      },
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});
