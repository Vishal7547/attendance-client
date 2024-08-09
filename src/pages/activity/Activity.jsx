import React from "react";
import Layout from "../../components/layout/Layout";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

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

const Activity = () => {
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
            <Typography>ECE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>ECE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>ECE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>ECE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>ECE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
          <Item>
            <Typography>ECE</Typography>
            <Typography>70% IN 80DAYS</Typography>
          </Item>
        </Stack>
      </Box>
      <Box sx={{ width: "100%" }} p={1}>
        <Card sx={{ padding: 1 }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 30, label: "ECE" },
                  { id: 1, value: 15, label: "CSE" },
                  { id: 2, value: 20, label: "MECH" },
                  { id: 3, value: 20, label: "CSE" },
                  { id: 4, value: 20, label: "AI" },
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
        </Card>
      </Box>
    </Layout>
  );
};

export default Activity;
