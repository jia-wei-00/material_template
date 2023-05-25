import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "poppins",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
