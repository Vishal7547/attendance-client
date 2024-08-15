import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TakeAttendance({
  open,
  handleClose,
  message,
  handleAttendance,
}) {
  const navigate = useNavigate();
  const handleAgree = () => {
    if (message?.type && message?.type === "submit_Take_Attendance") {
      handleClose();
      handleAttendance();
    } else {
      handleClose();
      navigate("/student-take-application/:id");
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{message.heading}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message.subHeading}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handleAgree();
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
