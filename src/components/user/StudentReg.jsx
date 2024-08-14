import Layout from "../layout/Layout";
import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Grid,
  Button,
  Chip,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import FormHelperText from "@mui/material/FormHelperText";
import { useUser } from "../../context/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const StudentReg = ({ nextHandler, current, backHandler }) => {
  const {
    user,
    semester: sem,
    session: ses,
    branch: bra,
    setStudentTableUpdate,
    studentTableUpdate,
  } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [reg, setReg] = useState("");
  const [name, setName] = useState("");
  const [semester, setSemester] = useState("");
  const [session, setSesssion] = useState("");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    email: "",
    password: "",
    backendError: "",
    phone: "",
    reg: "",
    name: "",
    semester: "",
    session: "",
    branch: "",
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
    backendError: false,
    phone: false,
    reg: false,
    name: false,
    semester: false,
    session: false,
    branch: false,
  });
  useEffect(() => {
    const timeClear = setTimeout(() => {
      setIsError((prev) => ({ ...prev, backendError: false }));
    }, 2000);
    return () => {
      clearTimeout(timeClear);
    };
  }, [isError?.backendError]);
  const handleClear = () => {
    setError({
      email: "",
      password: "",
      backendError: "",
      phone: "",
      reg: "",
      name: "",
      semester: "",
      session: "",
      branch: "",
    });

    setIsError({
      email: false,
      password: false,
      backendError: false,
      phone: false,
      reg: false,
      name: false,
      semester: false,
      session: false,
      branch: false,
    });
  };

  const handlePersonal = () => {
    try {
      if (!name) {
        setError((prev) => ({ ...prev, name: "name is missing" }));
        setIsError((prev) => ({ ...prev, name: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, name: "" }));
        setIsError((prev) => ({ ...prev, name: false }));
      }
      if (!email) {
        setError((prev) => ({ ...prev, email: "email is missing" }));
        setIsError((prev) => ({ ...prev, email: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, email: "" }));
        setIsError((prev) => ({ ...prev, email: false }));
      }
      if (!phone) {
        setError((prev) => ({ ...prev, phone: "phone is missing" }));
        setIsError((prev) => ({ ...prev, phone: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, phone: "" }));
        setIsError((prev) => ({ ...prev, phone: false }));
      }
      if (!password) {
        setError((prev) => ({ ...prev, password: "Password is missing" }));
        setIsError((prev) => ({ ...prev, password: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, password: "" }));
        setIsError((prev) => ({ ...prev, password: false }));
      }
      console.log("checking");
      nextHandler();
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleCollegeInfo = () => {
    try {
      if (!reg) {
        setError((prev) => ({ ...prev, reg: "reg is missing" }));
        setIsError((prev) => ({ ...prev, reg: true }));
        return;
      } else {
        if (reg.length >= 12 || reg.length <= 10) {
          setError((prev) => ({
            ...prev,
            reg: "reg number should be 11 digits",
          }));
          setIsError((prev) => ({ ...prev, reg: true }));
          return;
        }
        setError((prev) => ({ ...prev, reg: "" }));
        setIsError((prev) => ({ ...prev, reg: false }));
      }
      if (!session) {
        setError((prev) => ({ ...prev, session: "session is missing" }));
        setIsError((prev) => ({ ...prev, session: true }));

        return;
      } else {
        setError((prev) => ({ ...prev, session: "" }));
        setIsError((prev) => ({ ...prev, session: false }));
      }
      if (!semester) {
        setError((prev) => ({ ...prev, semester: "semester is missing" }));
        setIsError((prev) => ({ ...prev, semester: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, semester: "" }));
        setIsError((prev) => ({ ...prev, semester: false }));
      }
      if (!branch) {
        setError((prev) => ({ ...prev, branch: "branch is missing" }));
        setIsError((prev) => ({ ...prev, branch: true }));
        return;
      } else {
        setError((prev) => ({ ...prev, branch: "" }));
        setIsError((prev) => ({ ...prev, branch: false }));
      }
      console.log("working");
      nextHandler();
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        {
          userEmail: email,
          userName: name,
          userPhone: phone,
          userRegNo: reg,
          userSession: session,
          userSemester: semester,
          userBranch: branch,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        // console.log(data);

        setStudentTableUpdate(!studentTableUpdate);
        setLoading(false);
        navigate("/student");
      } else {
        console.log(data.message);
        setIsError((prev) => ({ ...prev, backendError: true }));
        setError((prev) => ({
          ...prev,
          backendError: data?.message,
        }));
        setLoading(false);
      }
      // handleClear();
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
    <Layout>
      {" "}
      <Container disableGutters>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {current === 0 && (
            <Card sx={{ width: 520, padding: "10px" }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography align="center" variant="h5">
                  <Divider>
                    <Chip label="Personal Info" size="large" />
                  </Divider>
                </Typography>
              </Box>

              <Box mt={1}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-basic"
                      type="text"
                      required
                      label="Name"
                      size="large"
                      variant="standard"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={isError.name}
                      helperText={error?.name}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-basic"
                      type="email"
                      required
                      label="Email"
                      variant="standard"
                      size="large"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={isError.email}
                      helperText={error?.email}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-basic"
                      type="number"
                      required
                      label="phone"
                      size="large"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      error={isError.phone}
                      helperText={error?.phone}
                      variant="standard"
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={isError.password}
                      helperText={error?.password}
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      endIcon={<NavigateNextIcon />}
                      type="button"
                      onClick={handlePersonal}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          )}

          {current === 1 && (
            <Card sx={{ width: 520, padding: "20px" }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography align="center" variant="h5">
                  <Divider>
                    <Chip label="College Info" size="large" />
                  </Divider>
                </Typography>
              </Box>

              <Box mt={1}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-basic"
                      type="number"
                      required
                      label="Reg"
                      size="large"
                      variant="standard"
                      value={reg}
                      onChange={(e) => setReg(e.target.value)}
                      error={isError.reg}
                      helperText={error?.reg}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Session
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Branch"
                          value={session}
                          onChange={(e) => setSesssion(e.target.value)}
                          error={isError.session}
                        >
                          {ses?.map((s) => (
                            <MenuItem key={s?._id} value={s?._id}>
                              {s?.sessionName}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText
                          sx={{
                            color: "red",
                          }}
                        >
                          {error?.session}
                        </FormHelperText>
                      </FormControl>

                      <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Semester
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Semester"
                          value={semester}
                          onChange={(e) => setSemester(e.target.value)}
                          error={isError.semester}
                          helperText={error?.semester}
                        >
                          {sem?.map((s) => (
                            <MenuItem key={s?._id} value={s?._id}>
                              {s?.semesterName}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText
                          sx={{
                            color: "red",
                          }}
                        >
                          {error?.semester}
                        </FormHelperText>
                      </FormControl>
                      <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Branch
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Branch"
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                          error={isError.branch}
                          helperText={error?.branch}
                        >
                          {bra?.map((s) => (
                            <MenuItem key={s?._id} value={s?._id}>
                              {s?.branchName}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText
                          sx={{
                            color: "red",
                          }}
                        >
                          {error?.branch}
                        </FormHelperText>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Button
                        variant="contained"
                        startIcon={<ChevronLeftIcon />}
                        onClick={backHandler}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<NavigateNextIcon />}
                        onClick={handleCollegeInfo}
                      >
                        Next
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          )}

          {current === 2 && (
            <Card sx={{ width: 520, padding: "20px" }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography align="center" variant="h5">
                  <Divider>
                    <Chip label="Face Capturing" size="large" />
                  </Divider>
                </Typography>
              </Box>

              <Box mt={1}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton size="large" sx={{ padding: 4 }}>
                      <InsertEmoticonIcon sx={{ fontSize: 90 }} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Button
                        variant="contained"
                        startIcon={<ChevronLeftIcon />}
                        onClick={backHandler}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<TurnedInNotIcon />}
                        type="button"
                        onClick={handleSubmit}
                      >
                        {loading ? "Loading..." : "Submit"}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          )}
        </Box>
        {isError?.backendError && (
          <Alert
            variant="filled"
            severity="error"
            sx={{
              position: "fixed",
              top: 30,
              left: 0,
              zIndex: 9999,
              margin: 1,
            }}
          >
            {error?.backendError}
          </Alert>
        )}
      </Container>
    </Layout>
  );
};

export default StudentReg;
