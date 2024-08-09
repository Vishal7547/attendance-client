import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Grid,
  Button,
  Chip,
} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
const Login = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ width: 420, padding: "20px" }}>
          <Box sx={{ flexGrow: "1" }}>
            <Typography align="center" variant="h5">
              <Divider>
                <Chip label=" Login With PCE Purnea" size="large" />
              </Divider>
            </Typography>
          </Box>

          <Box mt={1}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  type="email"
                  required
                  label="Email"
                  variant="standard"
                  size="large"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  type="password"
                  required
                  label="Password"
                  size="large"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained">Submit</Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
