import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./styles/main.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A27B5C",
    },
    secondary: {
      main: "#2C3639",
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div id="dark">
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
