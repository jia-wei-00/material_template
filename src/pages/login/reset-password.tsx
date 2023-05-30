import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface ResetPasswordProps {
  openResetModal: boolean;
  setOpenResetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ResetPassword: React.FC<ResetPasswordProps> = ({
  openResetModal,
  setOpenResetModal,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openResetModal}
      onClose={() => setOpenResetModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openResetModal}>
        <Box sx={modalStyle}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Reset Password
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <TextField
                id="standard-multiline-static"
                label="Enter email to reset"
                variant="standard"
                style={{ marginBottom: "30px" }}
                // value={resetEmail}
                // onChange={(e) => setResetEmail(e.target.value)}
                required
              />
              <Button
                onClick={() => {
                  //   props.reset(resetEmail);
                  //   setResetEmail("");
                  setOpenResetModal(false);
                }}
                variant="outlined"
                color="error"
                // disabled={props.loading}
              >
                RESET
              </Button>
            </FormControl>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ResetPassword;
