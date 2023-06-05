import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { authStore } from "./stores";
import { ChildrenProps } from "./types";

const Auth: React.FC<ChildrenProps> = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authStore.user) {
      navigate("/");
    }
  }, [authStore.user, navigate]);

  return <>{children}</>;
};

export default observer(Auth);
