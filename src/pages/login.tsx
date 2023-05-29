import React from "react";
import "../styles/pages/login.scss";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import {
  EmailRounded,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { HomeParticle } from "../components";
import { authStore } from "../stores";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] =
    React.useState<boolean>(false);
  const [active, setActive] = React.useState<string>("login");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [repeatPassword, setRepeatPassword] = React.useState<string>("");
  const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLoginRegister = (e: React.FormEvent<HTMLFormElement>): void => {
    // if(email || pass)
    e.preventDefault();
    active === "login"
      ? authStore.signIn(email, password)
      : authStore.signUp(email, repeatPassword);
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
            <motion.form className="mt-10" onSubmit={handleLoginRegister}>
              <Box className="box mt-10">
                <EmailRounded className="icon" />
                <FormControl variant="standard" className="form-control">
                  <InputLabel
                    error={!/\S+@\S+\.\S+/.test(email) && email != ""}
                    htmlFor="standard-email"
                  >
                    Email
                  </InputLabel>
                  <Input
                    error={!/\S+@\S+\.\S+/.test(email) && email != ""}
                    id="standard-error-helper-text"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    required
                  />
                  <FormHelperText
                    error={
                      !/\S+@\S+\.\S+/.test(email) &&
                      email !== "" &&
                      formSubmitted &&
                      email === ""
                    }
                  >
                    {!email
                      ? "Please fill in your email"
                      : !/\S+@\S+\.\S+/.test(email)
                      ? "Incorrect email format"
                      : "Nice"}
                  </FormHelperText>
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    required
                  />
                  <FormHelperText error={!password}>
                    {!password ? "Please fill in your password" : "Nice"}
                  </FormHelperText>
                </FormControl>
              </Box>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  active === "register"
                    ? { height: "auto", opacity: 1 }
                    : { marginTop: -40, height: 0, opacity: 0 }
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
                      onChange={(e) => setRepeatPassword(e.target.value)}
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
                    <FormHelperText
                      error={repeatPassword != password || !repeatPassword}
                    >
                      {!repeatPassword
                        ? "Please repeat your password"
                        : repeatPassword === password
                        ? "Nice"
                        : "Password not match"}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </motion.div>

              <Button type="submit" variant="contained" className="mt-10">
                {active === "login" ? "LOGIN" : "REGISTER"}
              </Button>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
      <HomeParticle />
    </div>
  );
};

export default LoginPage;
