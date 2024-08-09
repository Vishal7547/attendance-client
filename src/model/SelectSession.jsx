import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Grid, Button, Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
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

const SelectSession = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const handleNext = () => {
    handleClose();
    navigate("/student-attendance/3457fh");
  };
  return (
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
              <Button variant="contained" type="button" onClick={handleNext}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default SelectSession;
