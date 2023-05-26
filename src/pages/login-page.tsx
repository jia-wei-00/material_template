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
import { HomeParticle } from "../components";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] =
    React.useState<boolean>(false);
  const [active, setActive] = React.useState<String>("login");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <motion.div initial={{ y: 400 }} animate={{ y: 0 }}>
        <Card className="card">
          <CardContent>
            <motion.div className="btn-group">
              <Button onClick={() => setActive("login")}>Login</Button>
              <Button onClick={() => setActive("register")}>Register</Button>
              <motion.div
                animate={active === "register" ? { x: "100%" } : { x: 0 }}
                className="indicator"
              />
            </motion.div>
            <motion.form className="mt-10">
              <Box className="box mt-10">
                <EmailRounded className="icon" />
                <FormControl variant="standard" className="form-control">
                  <InputLabel htmlFor="standard-email">Email</InputLabel>
                  <Input id="standard-email" type="text" />
                </FormControl>
              </Box>
              <Box className={`box ${active === "login" && "mb-10"}`}>
                <Lock className="icon" />
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

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  active === "register"
                    ? { height: "auto", opacity: 1 }
                    : { margin: -20, height: 0, opacity: 0 }
                }
              >
                <Box className="box">
                  <Lock className="icon" />
                  <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Repeat Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showRepeatPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              setShowRepeatPassword(!showRepeatPassword)
                            }
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showRepeatPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </motion.div>

              <Button variant="contained" className="mt-10">
                {active === "login" ? "LOGIN" : "REGISTER"}
              </Button>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
