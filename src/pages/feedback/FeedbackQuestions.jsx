import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Typography, Card, Grid, Box, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FeedbackQuestionsTable from "../../components/feedback/FeedbackQuestionsTable";
import useModelHooks from "../../customHooks/useModel";
import FeedbackQuestionAdd from "../../model/FeedbackQuestionAdd";
const FeedbackQuestions = () => {
  const { open, handleClose, handleOpen } = useModelHooks();
  return (
    <Layout>
      <Container>
        <Card sx={{ padding: "10px" }}>
          <Typography variant="h4">Feedback Questions</Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={2}
          >
            <Box sx={{ width: "100%" }}>
              <Grid container>
                <Grid item xs={6} sx={{ marginTop: 2.3 }}>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    size="large"
                    onClick={handleOpen}
                  >
                    Add Questions
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

          <FeedbackQuestionsTable />
        </Card>
      </Container>
      <FeedbackQuestionAdd open={open} handleClose={handleClose} />
    </Layout>
  );
};

export default FeedbackQuestions;
