import React from "react";
import "../styles/pages/login-page.scss";
import {
  Box,
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

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <form>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <EmailRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <FormControl variant="standard" sx={{flexGrow: 1}}>
            <InputLabel htmlFor="standard-email">Email...</InputLabel>
            <Input id="standard-email" type="text"/>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password...
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
      </form>
    </div>
  );
};

export default LoginPage;
