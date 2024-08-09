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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Wireless Communication",
  "VLSI",
  "IOT",
  "MEMS",
  "Satellite Communication",
  "Digital Circuit",
  "CMOS",
];
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

const TeacherReg = ({ open, handleClose }) => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
              <Chip label="Teacher Registration" size="large" />
            </Divider>
          </Typography>
        </Box>

        <Box mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                type="email"
                required
                label="Email"
                variant="standard"
                size="large"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                type="text"
                required
                label="Name"
                variant="standard"
                size="large"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                type="password"
                required
                label="Password"
                size="large"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Branch
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Branch"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>ECE</MenuItem>
                  <MenuItem value={20}>EE</MenuItem>
                  <MenuItem value={30}>EEE</MenuItem>
                  <MenuItem value={10}>CIVIL</MenuItem>
                  <MenuItem value={20}>CSE</MenuItem>
                  <MenuItem value={30}>AI</MenuItem>
                  <MenuItem value={20}>MECH</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Role"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Teacher</MenuItem>
                  <MenuItem value={20}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                sx={{
                  minWidth: { sm: 200, md: 340 },
                }}
              >
                <InputLabel id="demo-multiple-checkbox-label">SUB</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default TeacherReg;
