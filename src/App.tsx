import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";
import "./styles/main.scss";
import { modeStore, authStore } from "./stores";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";
import { Nav } from "./components";
import { pages } from "./constant";
import Auth from "./Auth";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={modeStore.mode === "dark" ? darkTheme : lightTheme}>
      <div id={modeStore.mode}>
        {authStore.user && <Nav />}
        <Auth>
          <Routes>
            {pages.map((page, index) => {
              return (
                <Route key={index} path={page.path} element={page.element} />
              );
            })}
          </Routes>
        </Auth>
      </div>
      <ToastContainer theme={modeStore.mode === "dark" ? "dark" : "light"} />
    </ThemeProvider>
  );
};

export default observer(App);
