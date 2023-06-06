import React from "react";
import { subscribeTicks } from "../../websocket";

const HomePage: React.FC = () => {
  React.useEffect(() => {
    subscribeTicks();
  }, []);

  return <div>home</div>;
};

export default HomePage;
