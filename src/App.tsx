import { Routes, Route } from "react-router-dom";
import { LoginPage, HomePage } from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";
import "./styles/main.scss";
import { modeStore, authStore } from "./stores";
import { Brightness7, ModeNight } from "@mui/icons-material";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";
import { Nav } from "./components";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={modeStore.mode === "dark" ? darkTheme : lightTheme}>
      <div id={modeStore.mode}>
        <div
          onClick={() => modeStore.setMode()}
          style={{
            position: "absolute",
            width: "20px",
            left: "50%",
            zIndex: 100,
          }}
        >
          {modeStore.mode === "dark" ? <Brightness7 /> : <ModeNight />}
        </div>
        {authStore.user && <Nav />}
        <Routes>
          {!authStore.user ? (
            <>
              <Route path="/" element={<LoginPage />} />
            </>
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
        </Routes>
      </div>
      <ToastContainer theme={modeStore.mode === "dark" ? "dark" : "light"} />
    </ThemeProvider>
  );
};

export default observer(App);
