import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Typography, Card, Grid, Box } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LeaveTable from "../../leave/LeaveTable";
import TakeAttendanceTable from "../../components/Attendance/TakeAttendanceTable";
const TakeAttendance = () => {
  return (
    <Layout>
      <Container>
        <Card sx={{ padding: "10px" }}>
          <Typography variant="h5">
            Ration of Present And Absent 30/67
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={1}
          >
            <Box sx={{ width: "100%" }}>
              <Grid container rowSpacing={5}>
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

          <TakeAttendanceTable />
        </Card>
      </Container>
    </Layout>
  );
};

export default TakeAttendance;
