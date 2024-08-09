import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Button, Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TakeAttendance from "../confirm/TakeAttendance";
import useModelHooks from "../customHooks/useModel";

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

const SelectSubjects = ({ open, handleClose }) => {
  const {
    open: open1,
    handleClose: handleClose1,
    handleOpen: handleOpen1,
  } = useModelHooks();

  const handleNext = () => {
    handleClose();
    handleOpen1();
  };
  const message = {
    heading: "Are you sure you want to take attendance?",
    subHeading:
      "If you agree, then by default all student attendance will be marked as present. The button will behave like a toggle: if it is marked present, clicking it will change the status to absent, and vice versa. The time of attendance will also be recorded. Are you agree with this?",
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
                <Chip label="Select Session" size="large" />
              </Divider>
            </Typography>
          </Box>

          <Box mt={1}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Session
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Session"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>2020-2024</MenuItem>
                    <MenuItem value={20}>2021-2025</MenuItem>
                    <MenuItem value={30}>2022-2026</MenuItem>
                    <MenuItem value={10}>2023-2027</MenuItem>
                    <MenuItem value={20}>2024-2028</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Sem
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sem"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={10}>3</MenuItem>
                    <MenuItem value={20}>4</MenuItem>
                    <MenuItem value={10}>5</MenuItem>
                    <MenuItem value={20}>6</MenuItem>
                    <MenuItem value={10}>7</MenuItem>
                    <MenuItem value={20}>8</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Sub
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sub"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>VLSI</MenuItem>
                    <MenuItem value={20}>IOT</MenuItem>
                    <MenuItem value={10}>MEMS</MenuItem>
                    <MenuItem value={20}>WS</MenuItem>
                  </Select>
                </FormControl>
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
      <TakeAttendance
        open={open1}
        handleClose={handleClose1}
        message={message}
      />
    </>
  );
};

export default SelectSubjects;
