import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Typography, Card, Grid, Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LeaveTable from "../../leave/LeaveTable";
import FeedbackTable from "../../components/feedback/FeedbackTable";
const Feedback = () => {
  return (
    <Layout>
      <Container>
        <Card sx={{ padding: "10px" }}>
          <Typography variant="h4">Feedback Management</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Year
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Year"
                      fullWidth
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                      <MenuItem value={30}>3</MenuItem>
                      <MenuItem value={30}>4</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Branch
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
                      <MenuItem value={10}>ECE</MenuItem>
                      <MenuItem value={20}>EEE</MenuItem>
                      <MenuItem value={30}>CIVIL</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button variant="contained" startIcon={<FilterAltIcon />}>
                    Submit
                  </Button>
                </Grid>

                <Grid item xs={6}>
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

          <FeedbackTable />
        </Card>
      </Container>
    </Layout>
  );
};

export default Feedback;
