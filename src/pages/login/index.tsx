import React from "react";
import "../../styles/pages/login.scss";
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
} from "@mui/material";
import {
  EmailRounded,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { HomeParticle } from "../../components";
import { authStore } from "../../stores";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, loginSchema } from "../../schemas/login-page-schemas";
import { InputData } from "../../types/form";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] =
    React.useState<boolean>(false);
  const [active, setActive] = React.useState<string>("login");

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<InputData>({
    resolver: zodResolver(active === "login" ? loginSchema : registerSchema),
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<InputData> = (values) => {
    active === "login"
      ? authStore.signIn(values.email, values.password)
      : authStore.signUp(values.email, values.passwordConfirm!);
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
            <motion.form
              className="mt-10"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              {/* Email Input */}
              <Box
                className={`${
                  !!errors["email"] ? "flex-center" : "flex-end"
                } box mt-10`}
              >
                <EmailRounded className="icon" />
                <FormControl variant="standard" className="form-control">
                  <InputLabel
                    error={!!errors["email"]}
                    htmlFor="standard-email"
                  >
                    Email
                  </InputLabel>
                  <Input
                    error={!!errors["email"]}
                    type="email"
                    {...register("email")}
                  />
                  <FormHelperText error={!!errors["email"]}>
                    {errors["email"] ? errors["email"].message : ""}
                  </FormHelperText>
                </FormControl>
              </Box>

              {/* Password Input */}
              <Box
                className={`${
                  !!errors["password"] ? "flex-center" : "flex-end"
                } box`}
              >
                <Lock className="icon" />
                <FormControl variant="standard">
                  <InputLabel
                    error={!!errors["password"]}
                    htmlFor="standard-adornment-password"
                  >
                    Password
                  </InputLabel>
                  <Input
                    type={showPassword ? "text" : "password"}
                    error={!!errors["password"]}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((show) => !show)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    {...register("password")}
                  />
                  <FormHelperText error={!!errors["password"]}>
                    {errors["password"] ? errors["password"].message : ""}
                  </FormHelperText>
                </FormControl>
              </Box>

              {/* Repeat Password Input */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  active === "register"
                    ? { height: "auto", opacity: 1 }
                    : { marginTop: -40, height: 0, opacity: 0 }
                }
              >
                <Box
                  className={`${
                    !!errors["passwordConfirm"] ? "flex-center" : "flex-end"
                  } box`}
                >
                  <Lock className="icon" />
                  <FormControl variant="standard">
                    <InputLabel
                      error={!!errors["passwordConfirm"]}
                      htmlFor="standard-adornment-password"
                    >
                      Repeat Password
                    </InputLabel>
                    <Input
                      type={showRepeatPassword ? "text" : "password"}
                      error={!!errors["passwordConfirm"]}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              setShowRepeatPassword((show) => !show)
                            }
                          >
                            {showRepeatPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      {...register("passwordConfirm")}
                    />
                    <FormHelperText error={!!errors["passwordConfirm"]}>
                      {errors["passwordConfirm"]
                        ? errors["passwordConfirm"].message
                        : ""}
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
