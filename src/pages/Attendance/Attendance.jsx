import React from "react";
import Layout from "../../components/layout/Layout";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import AttendanceFilter from "../../components/Attendance/AttendanceFilter";

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",

  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
  flexGrow: 1,
  width: "200px",
  cursor: "pointer",
}));

const Attendance = () => {
  return (
    <Layout>
      <Box sx={{ width: "100%" }} my={4} p={2}>
        <Stack
          spacing={{ xs: 1, sm: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <Item>
            <Typography>ECE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>CSE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>MECH</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>EEE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>EE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>AI</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>IT</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
        </Stack>
        <AttendanceFilter />
      </Box>
    </Layout>
  );
};

export default Attendance;
