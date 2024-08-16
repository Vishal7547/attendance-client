import React from "react";

import { Container, Typography, Card, Grid, Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Layout from "../layout/Layout";
import AttendanceTable from "./AttendanceTable";
import GetAppIcon from "@mui/icons-material/GetApp";

const AttendanceFilter = ({ branchAttendance }) => {
  return (
    <>
      <Card sx={{ padding: "10px", marginTop: "20px" }}>
        <Typography variant="h4">Attendance</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Subject
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Computer Network</MenuItem>
                    <MenuItem value={20}>Data & Structure</MenuItem>
                    <MenuItem value={30}>Operating System</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Percentage
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Percentage"
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>{">=90%"}</MenuItem>
                    <MenuItem value={20}>{">=75%"}</MenuItem>
                    <MenuItem value={30}>{"<=75%"}</MenuItem>
                    <MenuItem value={30}>{"<=60%"}</MenuItem>
                    <MenuItem value={30}>{"<=40%"}</MenuItem>
                    <MenuItem value={30}>{"<=30%"}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Button variant="contained" startIcon={<FilterAltIcon />}>
                  Submit
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" startIcon={<GetAppIcon />}>
                  Export
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" startIcon={<RestartAltIcon />}>
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <TextField
                  label="Search"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <AttendanceTable branchAttendance={branchAttendance} />
      </Card>
    </>
  );
};

export default AttendanceFilter;
