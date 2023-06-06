import React from "react";
import "../../styles/pages/login.scss";
import { Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { HomeParticle } from "../../components";
import ResetPassword from "./reset-password";
import RegisterForm from "./register-form";
import LoginForm from "./login-form";
import { authStore } from "../../stores";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [active, setActive] = React.useState<string>("login");
  const [openResetModal, setOpenResetModal] = React.useState<boolean>(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (authStore.user) {
      navigate("/");
    }
  }, [authStore.user]);

  return (
    <div className="wrapper">
      <motion.div initial={{ y: 400 }} animate={{ y: 0 }} className="form-body">
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
            <motion.div
              animate={
                active === "login"
                  ? { height: "auto" }
                  : { height: 0, opacity: 0 }
              }
            >
              <LoginForm />
            </motion.div>
            <motion.div
              animate={
                active === "register"
                  ? { height: "auto", marginTop: "-15px" }
                  : { height: 0, opacity: 0 }
              }
            >
              <RegisterForm />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
      <HomeParticle />
      <ResetPassword
        openResetModal={openResetModal}
        setOpenResetModal={setOpenResetModal}
      />
    </div>
  );
};

export default LoginPage;
