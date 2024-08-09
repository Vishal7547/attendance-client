import React from "react";
import Layout from "../../components/layout/Layout";
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

import StaffTable from "../../components/staff/StaffTable";
import TeacherReg from "../../model/TeacherReg";

import useModelHooks from "../../customHooks/useModel";

const Staff = () => {
  const { open, handleOpen, handleClose } = useModelHooks();
  return (
    <Layout>
      <Container>
        <Card sx={{ padding: "10px" }}>
          <Typography variant="h4">Teacher/Admin Registration</Typography>
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
                <Grid item xs={6} mt={2.1}>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    size="large"
                    sx={{ marginLeft: "auto" }}
                    onClick={handleOpen}
                  >
                    Add Teacher
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
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

          <StaffTable />
        </Card>
      </Container>
      <TeacherReg open={open} handleClose={handleClose} />
    </Layout>
  );
};

export default Staff;
