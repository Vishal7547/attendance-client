import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Container, Box, Typography, Card, Button } from "@mui/material";
import ConfirmLeaveApplication from "../../confirm/LeaveApplication";
import useModelHooks from "../../customHooks/useModel";

const LeaveApplication = () => {
  const { open, handleClose, handleOpen } = useModelHooks();
  const [message, setMessage] = useState({
    heading: "",
    subHeading: "",
  });
  const [isAproved, setApproved] = useState(false);
  const handleAccept = () => {
    setMessage({
      heading: "Are You Sure , You want to Allow ?",
      subHeading: `If you approve the application of Rahul Kumar, a student from the ECE branch for the 2020-2024 session, currently in the 8th semester, please upload the signature for confirmation`,
    });
    handleOpen();
  };
  const handleReject = () => {
    setMessage({
      heading: "Are You Sure , You want to Reject ?",
      subHeading: `You are rejecting the application of Rahul Kumar, a student from the ECE branch of the 2020-2024 session, currently in the 8th semeste`,
    });
    handleOpen();
  };
  return (
    <Layout>
      <Container>
        <Card sx={{ padding: 3 }}>
          <Box>
            <Typography variant="h4" align="center">
              4 days Leave Application For Marriage
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="p" component="div" align="left">
              To,
            </Typography>
            <Typography variant="p" component="div" align="left">
              Mohit Kumar
            </Typography>
            <Typography variant="p" align="left">
              HOD OF ECE
            </Typography>
            <Typography variant="p" component="div" align="left">
              Purnea College Of Engineering
            </Typography>
          </Box>
          <Box my={1}>
            <Typography variant="p" component="div" align="left">
              12/09/24
            </Typography>
          </Box>
          <Box my={1}>
            <Typography variant="p" component="div" align="left">
              From,
            </Typography>
            <Typography variant="p" component="div" align="left">
              Vishal Kumar
            </Typography>
            <Typography variant="p" component="div" align="left">
              2020-2024 || 8TH SEM || ECE
            </Typography>
          </Box>
          <Box my={1}>
            <Typography variant="p" component="div" align="left">
              Leave For Marriage
            </Typography>
          </Box>

          <Box my={1}>
            <Typography variant="p" component="div" align="left">
              This application allows teams to collaborate on projects, track
              tasks, manage deadlines, and communicate. Different users have
              different roles based on their designation, which determines their
              access level and capabilities within the application.
            </Typography>
          </Box>

          <Box my={1}>
            <Typography variant="p" component="div" align="left">
              Your Faithfully
            </Typography>
            <Typography variant="p" component="div" align="left">
              Vishal Kumar
            </Typography>
          </Box>

          <Box
            my={1}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Button
              variant={"contained"}
              sx={{
                marginRight: "10px",
              }}
              onClick={handleAccept}
            >
              Approved
            </Button>
            <Button
              variant={"contained"}
              sx={{
                background: (theme) => {
                  return theme.palette.error.main;
                },
                color: (theme) => theme.palette.common.white,
                "&:hover": {
                  background: (theme) => theme.palette.error.main,
                },
              }}
              onClick={handleReject}
            >
              Rejected
            </Button>
          </Box>
        </Card>
      </Container>
      <ConfirmLeaveApplication
        open={open}
        handleClose={handleClose}
        message={message}
        setApproved={setApproved}
      />
    </Layout>
  );
};

export default LeaveApplication;
