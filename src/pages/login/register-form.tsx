import {
  EmailRounded,
  Visibility,
  VisibilityOff,
  Lock,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputData } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/login-page-schemas";
import { authStore } from "../../stores";

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] =
    React.useState<boolean>(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<InputData>({
    resolver: zodResolver(registerSchema),
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<InputData> = (values) => {
    authStore.signUp(values.email, values.passwordConfirm!);
  };

  return (
    <motion.form className="mt-10" onSubmit={handleSubmit(onSubmitHandler)}>
      {/* Email Input */}
      <Box
        className={`${
          !!errors["email"] ? "flex-center" : "flex-end"
        } box mt-10`}
      >
        <EmailRounded className="icon" />
        <FormControl variant="standard" className="form-control">
          <InputLabel error={!!errors["email"]} htmlFor="standard-email">
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
        className={`${!!errors["password"] ? "flex-center" : "flex-end"} box`}
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
                  onClick={() => setShowRepeatPassword((show) => !show)}
                >
                  {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            {...register("passwordConfirm")}
          />
          <FormHelperText error={!!errors["passwordConfirm"]}>
            {errors["passwordConfirm"] ? errors["passwordConfirm"].message : ""}
          </FormHelperText>
        </FormControl>
      </Box>

      <Button type="submit" variant="contained" className="mt-10">
        REGISTER
      </Button>
    </motion.form>
  );
};

export default RegisterForm;
