import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography, useTheme } from "@mui/material";
import AttendanceFilter from "../../components/Attendance/AttendanceFilter";
import { useUser } from "../../context/UserProvider";
import { useParams } from "react-router-dom";
import { useAttendance } from "../../context/AttendanceProvider";
import { green } from "@mui/material/colors";

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
  const { branch } = useUser();
  const { theme } = useTheme();
  const { semester, branch: bro, session } = useParams();
  const { fetchBranchWiseAttendance, branchAttendance } = useAttendance();
  useEffect(() => {
    fetchBranchWiseAttendance(semester, bro, session);
  }, [semester, bro, session]);
  const callFun = (a, b) => {
    console.log(a, b);
    console.log(a === b);
  };
  return (
    <Layout>
      <Box sx={{ width: "100%" }} my={4} p={2}>
        <Stack
          spacing={{ xs: 1, sm: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {branch?.map((b, i) => (
            <Item
              key={b._id}
              sx={{
                backgroundColor: b?._id === bro ? green[500] : "inherit",
                color: b?._id === bro ? "white" : "inherit",
              }}
            >
              {/* {callFun(b?._id, bro)} */}
              <Typography>{b?.branchName}</Typography>
              <Typography>Attendance</Typography>
            </Item>
          ))}
        </Stack>
        <AttendanceFilter branchAttendance={branchAttendance} />
      </Box>
    </Layout>
  );
};

export default Attendance;
