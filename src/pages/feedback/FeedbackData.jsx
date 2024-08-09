import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Box, Typography, Card, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FeedbackData = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/student-feedback");
  };
  const feedbackQuestions = [
    "How clear were the explanations provided during the class? Are there any concepts that you found difficult to understand?",
    "Was the pace of the class appropriate for you? Did you feel that the class was too fast, too slow, or just right?",
    "How engaging did you find the class activities and materials? Were there any activities that particularly helped you learn or, conversely, any that you found less effective?",
    "Do you have any suggestions for improving the class structure or content? Are there specific topics or methods you would like to see in future classes?",
    "How well did the instructor address questions and concerns during the class? Was there enough opportunity for interaction and discussion?",
  ];

  return (
    <Layout>
      <Container>
        <Card sx={{ padding: 3 }}>
          <Box>
            <Typography variant="h4" align="center">
              Feedback Provided By Vishal Kumar
            </Typography>
          </Box>
          {/* <Box my={2}>
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
          </Box> */}

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
              12/09/24
            </Typography>
          </Box>
          <Box my={1}>
            {feedbackQuestions.map((f, i) => (
              <>
                <Typography
                  variant="p"
                  component="div"
                  align="left"
                  sx={{ marginTop: 1 }}
                >
                  Q. {f}
                </Typography>
                <Typography
                  variant="p"
                  component="div"
                  align="left"
                  sx={{ marginTop: 1 }}
                >
                  Ans. 6
                </Typography>
              </>
            ))}
          </Box>

          <Box my={1}>
            <Typography variant="p" component="div" align="left">
              Recommendation:
            </Typography>
            <Typography variant="p" component="div" align="left">
              This application allows teams to collaborate on projects, track
              tasks, manage deadlines, and communicate. Different users have
              different roles based on their designation, which determines their
              access level and capabilities within the application.
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
              onClick={handleBack}
            >
              Back
            </Button>
          </Box>
        </Card>
      </Container>
    </Layout>
  );
};

export default FeedbackData;
