import React from "react";
import Layout from "../../components/layout/Layout";
import { Typography, Card, Grid, Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import GetAppIcon from "@mui/icons-material/GetApp";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IndividualAttendanceTable from "../../components/Attendance/IndividualAttendanceTable";
const IndividualAttendance = () => {
  return (
    <Layout>
      <Card sx={{ padding: "10px", marginTop: "20px" }}>
        <Typography variant="h4">Attendance</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box my={2}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <DatePicker label="From" />
              </Grid>

              <Grid item xs={6}>
                <DatePicker label="To" />
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

        <IndividualAttendanceTable />
      </Card>
    </Layout>
  );
};

export default IndividualAttendance;
