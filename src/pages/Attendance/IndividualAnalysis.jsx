import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Box, Card, Typography } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",

  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
  cursor: "pointer",
}));
const IndividualAnalysis = () => {
  return (
    <Layout>
      <Container>
        <Card>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p={2}
          >
            <Box
              width="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 30, label: "Present" },
                      { id: 1, value: 15, label: "Absent" },
                    ],
                    arcLabel: (item) => `${item.label} (${item.value})`,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontWeight: "bold",
                  },
                }}
                width={600}
                height={300}
              />
            </Box>
            <Box>
              <Typography variant="h4">Attendance of 40 days</Typography>
            </Box>
            <Box sx={{ width: "100%" }} my={4} p={2}>
              <Stack
                spacing={{ xs: 1, sm: 3 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
              >
                <Item>
                  <Typography>Present</Typography>
                  <Typography>22/40 days</Typography>
                </Item>
                <Item>
                  <Typography>Absent</Typography>
                  <Typography>18/40 days</Typography>
                </Item>
              </Stack>
            </Box>
          </Box>
        </Card>
      </Container>
    </Layout>
  );
};

export default IndividualAnalysis;
