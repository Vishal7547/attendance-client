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
import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useUser } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
const Login = () => {
  const { setUser } = useUser();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    email: "",
    password: "",
    backendError: "",
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
    backendError: false,
  });
  const handleClear = () => {
    setError((prev) => ({ ...prev, password: "" }));
    setIsError((prev) => ({ ...prev, password: false }));
    setError((prev) => ({ ...prev, email: "" }));
    setIsError((prev) => ({ ...prev, email: false }));
  };
  useEffect(() => {
    const timeClear = setTimeout(() => {
      setIsError((prev) => ({ ...prev, backendError: false }));
    }, 2000);
    return () => {
      clearTimeout(timeClear);
    };
  }, [isError?.backendError]);
  const handleLogin = async () => {
    try {
      if (!email) {
        setError((prev) => ({ ...prev, email: "email is missing" }));
        setIsError((prev) => ({ ...prev, email: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, email: "" }));
        setIsError((prev) => ({ ...prev, email: false }));
      }
      if (!password) {
        setError((prev) => ({ ...prev, password: "Password is missing" }));
        setIsError((prev) => ({ ...prev, password: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, password: "" }));
        setIsError((prev) => ({ ...prev, password: false }));
      }
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        {
          userEmail: email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        localStorage.setItem("token", data.token);
        console.log(data);
        setUser(data?.user);
        navigate("/staff");
        setLoading(false);
      } else {
        console.log("something went wrong");
        setIsError((prev) => ({ ...prev, backendError: true }));
        setError((prev) => ({ ...prev, backendError: "something went wrong" }));
        setLoading(false);
      }
      handleClear();
    } catch (e) {
      setIsError((prev) => ({ ...prev, backendError: true }));
      setError((prev) => ({
        ...prev,
        backendError: e.response?.data?.message || "An error occurred",
      }));
      console.log(e.message);
      setLoading(false);
    }
  };
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
                  error={isError.email}
                  type="email"
                  required
                  label="Email"
                  variant="standard"
                  size="large"
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={error?.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  error={isError?.password}
                  type="password"
                  required
                  label="Password"
                  size="large"
                  variant="standard"
                  helperText={error?.password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="button" onClick={handleLogin}>
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
      {isError?.backendError && (
        <Alert
          variant="filled"
          severity="error"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9,
            margin: 1,
          }}
        >
          {error?.backendError}
        </Alert>
      )}
    </Container>
  );
};

export default Login;
