// import { HomePage, CoinPage, PortfolioPage } from "./pages";

import LoginPage from "./pages/login";
import CoinPage from "./pages/coin";
import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";

export const pages = [
  { title: "Login", path: "/login", element: <LoginPage /> },
  { title: "Home", path: "/", element: <HomePage /> },
  { title: "Coin", path: "/coin", element: <CoinPage /> },
  { title: "Portfolio", path: "/portfolio", element: <PortfolioPage /> },
];

export const settings = ["Profile", "Account", "Dashboard", "Logout"];
