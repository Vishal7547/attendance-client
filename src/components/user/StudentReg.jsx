import Layout from "../layout/Layout";
import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Grid,
  Button,
  Chip,
} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
const StudentReg = ({ nextHandler, current, backHandler }) => {
  return (
    <Layout>
      {" "}
      <Container disableGutters>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {current === 0 && (
            <Card sx={{ width: 520, padding: "20px" }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography align="center" variant="h5">
                  <Divider>
                    <Chip label="Personal Info" size="large" />
                  </Divider>
                </Typography>
              </Box>

              <Box mt={1}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-basic"
                      type="text"
                      required
                      label="Name"
                      size="large"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
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
                      type="password"
                      required
                      label="Password"
                      size="large"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      endIcon={<NavigateNextIcon />}
                      onClick={nextHandler}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          )}

          {current === 1 && (
            <Card sx={{ width: 520, padding: "20px" }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography align="center" variant="h5">
                  <Divider>
                    <Chip label="College Info" size="large" />
                  </Divider>
                </Typography>
              </Box>

              <Box mt={1}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-basic"
                      type="number"
                      required
                      label="Reg"
                      size="large"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Semester
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Semester"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>1</MenuItem>
                          <MenuItem value={20}>2</MenuItem>
                          <MenuItem value={30}>3</MenuItem>
                          <MenuItem value={10}>4</MenuItem>
                          <MenuItem value={20}>5</MenuItem>
                          <MenuItem value={30}>6</MenuItem>
                          <MenuItem value={20}>7</MenuItem>
                          <MenuItem value={30}>8</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl variant="standard" sx={{ minWidth: 120 }}>
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
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Button
                        variant="contained"
                        startIcon={<ChevronLeftIcon />}
                        onClick={backHandler}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<NavigateNextIcon />}
                        onClick={nextHandler}
                      >
                        Next
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          )}

          {current === 2 && (
            <Card sx={{ width: 520, padding: "20px" }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography align="center" variant="h5">
                  <Divider>
                    <Chip label="Face Capturing" size="large" />
                  </Divider>
                </Typography>
              </Box>

              <Box mt={1}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton size="large" sx={{ padding: 4 }}>
                      <InsertEmoticonIcon sx={{ fontSize: 90 }} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Button
                        variant="contained"
                        startIcon={<ChevronLeftIcon />}
                        onClick={backHandler}
                      >
                        Back
                      </Button>
                      <Button variant="contained" endIcon={<TurnedInNotIcon />}>
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default StudentReg;
