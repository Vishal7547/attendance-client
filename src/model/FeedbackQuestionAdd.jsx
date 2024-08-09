import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Button, Chip, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const FeedbackQuestionAdd = ({ open, handleClose }) => {
  const handleNext = () => {
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ flexGrow: "1" }}>
            <Typography align="center" variant="h5">
              <Divider>
                <Chip label="Add Feedback Qn" size="large" />
              </Divider>
            </Typography>
          </Box>

          <Box mt={1}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="standard-multiline-static"
                  label="question"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="standard"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" type="button" onClick={handleNext}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default FeedbackQuestionAdd;
