import React from "react";
import "../styles/pages/login-page.scss";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import {
  EmailRounded,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<String>("login");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <Card className="card">
        <CardContent>
          <div className="btn-group">
            <Button onClick={() => setActive("login")}>Login</Button>
            <Button onClick={() => setActive("register")}>Register</Button>
            <div
              className={`indicator ${
                active === "register" && "register-active"
              }`}
            />
          </div>
          <form className="mt-10">
            <Box className="box">
              <EmailRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <FormControl variant="standard" className="form-control">
                <InputLabel htmlFor="standard-email">Email</InputLabel>
                <Input id="standard-email" type="text" />
              </FormControl>
            </Box>
            <Box className="box mb-10">
              <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <FormControl variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Button variant="contained" className="mt-10">
              {active === "login" ? "LOGIN" : "REGISTER"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
