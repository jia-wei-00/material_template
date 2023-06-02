// import { HomePage, CoinPage, PortfolioPage } from "./pages";

import CoinPage from "./pages/coin";
import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";

export const pages = [
  { title: "Home", path: "/", element: <HomePage /> },
  { title: "Coin", path: "/coin", element: <CoinPage /> },
  { title: "Portfolio", path: "/portfolio", element: <PortfolioPage /> },
];

export const settings = ["Profile", "Account", "Dashboard", "Logout"];
