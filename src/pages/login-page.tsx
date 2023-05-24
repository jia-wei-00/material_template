import React from "react";
import "../styles/pages/login-page.scss";
import { Grid, TextField } from "@mui/material";

const LoginPage: React.FC = () => {
  return (
    <div className="wrapper">
      <form>
        <TextField label="Email" />
        <TextField label="Password" />
        <TextField label="Multiline" />
      </form>
    </div>
  );
};

export default LoginPage;
