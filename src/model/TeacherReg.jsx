import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  TextField,
  Grid,
  Button,
  Chip,
  FormHelperText,
  Alert,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useUser } from "../context/UserProvider";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const TeacherReg = ({ open, handleClose }) => {
  const { branch: bra, subject: sub } = useUser();

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [subject, setSubject] = useState([]);
  const [branch, setBranch] = useState([]);
  const [filterSubject, setFilterSubject] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    email: "",
    password: "",
    backendError: "",
    role: "",
    subject: "",
    name: "",
    branch: "",
    success: "",
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
    backendError: false,
    role: false,
    subject: false,
    name: false,
    branch: false,
    success: false,
  });
  useEffect(() => {
    const selectedBranchIds = branch?.map((b) => b);

    const filtered = sub.filter((s) => selectedBranchIds.includes(s.branch));

    setFilterSubject(filtered);
  }, [branch]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBranch(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeSubject = (event) => {
    const {
      target: { value },
    } = event;
    setSubject(typeof value === "string" ? value.split(",") : value);
  };
  useEffect(() => {
    const timeClear = setTimeout(() => {
      setIsError((prev) => ({ ...prev, backendError: false }));
    }, 2000);
    return () => {
      clearTimeout(timeClear);
    };
  }, [isError?.backendError]);
  useEffect(() => {
    const timeClear = setTimeout(() => {
      setIsError((prev) => ({ ...prev, success: false }));
    }, 2000);
    return () => {
      clearTimeout(timeClear);
    };
  }, [isError?.success]);
  const handleSubmit = async () => {
    // console.log(name, email, password, role, subject, branch);
    if (!email) {
      setError((prev) => ({ ...prev, email: "email is missing" }));
      setIsError((prev) => ({ ...prev, email: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, email: "" }));
      setIsError((prev) => ({ ...prev, email: false }));
    }
    if (!name) {
      setError((prev) => ({ ...prev, name: "name is missing" }));
      setIsError((prev) => ({ ...prev, name: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, name: "" }));
      setIsError((prev) => ({ ...prev, name: false }));
    }

    if (!password) {
      setError((prev) => ({ ...prev, password: "Password is missing" }));
      setIsError((prev) => ({ ...prev, password: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, password: "" }));
      setIsError((prev) => ({ ...prev, password: false }));
    }
    if (!role) {
      setError((prev) => ({ ...prev, role: "role is missing" }));
      setIsError((prev) => ({ ...prev, role: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, role: "" }));
      setIsError((prev) => ({ ...prev, role: false }));
    }

    if (!role) {
      setError((prev) => ({ ...prev, role: "role is missing" }));
      setIsError((prev) => ({ ...prev, role: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, role: "" }));
      setIsError((prev) => ({ ...prev, role: false }));
    }
    if (branch.length === 0) {
      setError((prev) => ({ ...prev, branch: "branch is missing" }));
      setIsError((prev) => ({ ...prev, branch: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, branch: "" }));
      setIsError((prev) => ({ ...prev, branch: false }));
    }
    if (subject.length === 0) {
      setError((prev) => ({ ...prev, subject: "subject is missing" }));
      setIsError((prev) => ({ ...prev, subject: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, subject: "" }));
      setIsError((prev) => ({ ...prev, subject: false }));
    }
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        {
          userEmail: email,
          userName: name,
          userDepartment: branch,
          userAssignSubject: subject,
          userRole: role,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        console.log(data);

        // setStudentTableUpdate(!studentTableUpdate);
        setLoading(false);

        // handleClear();
        setIsError((prev) => ({ ...prev, success: true }));
        setError((prev) => ({
          ...prev,
          backendError: "teacher Added Successfully",
        }));
        // navigate("/staff");
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
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ flexGrow: "1" }}>
            <Typography align="center" variant="h5">
              <Divider>
                <Chip label="Teacher Registration" size="large" />
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
                  type="text"
                  required
                  label="Name"
                  variant="standard"
                  size="large"
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
                  type="password"
                  required
                  label="Password"
                  size="large"
                  variant="standard"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={isError.password}
                  helperText={error?.password}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Role
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    error={isError.subject}
                  >
                    <MenuItem value="teacher">Teacher</MenuItem>
                    <MenuItem value="hod">HOD</MenuItem>
                  </Select>
                  <FormHelperText
                    sx={{
                      color: "red",
                    }}
                  >
                    {error?.role}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{
                    width: { sm: 200, md: 340 },
                  }}
                >
                  <InputLabel id="demo-multiple-checkbox-label">
                    Branch
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={branch}
                    onChange={handleChange}
                    error={isError.branch}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) =>
                      selected
                        .map(
                          (id) =>
                            bra.find((branch) => branch._id === id)?.branchName
                        )
                        .join(", ")
                    }
                    MenuProps={MenuProps}
                  >
                    {bra.map((name) => (
                      <MenuItem key={name?._id} value={name?._id}>
                        <Checkbox checked={branch.indexOf(name?._id) > -1} />
                        <ListItemText primary={name?.branchName} />
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
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{
                    width: { sm: 200, md: 340 },
                  }}
                >
                  <InputLabel id="demo-multiple-checkbox-label">SUB</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={subject}
                    onChange={handleChangeSubject}
                    error={isError.subject}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) =>
                      selected
                        .map(
                          (id) =>
                            filterSubject.find((subject) => subject._id === id)
                              ?.subjectName
                        )
                        .join(", ")
                    }
                    MenuProps={MenuProps}
                  >
                    {filterSubject.map((name) => (
                      <MenuItem key={name?._id} value={name?._id}>
                        <Checkbox checked={subject.indexOf(name?._id) > -1} />
                        <ListItemText primary={name?.subjectName} />
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText
                    sx={{
                      color: "red",
                    }}
                  >
                    {error?.subject}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" onClick={handleSubmit}>
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
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

      {isError?.success && (
        <Alert
          variant="filled"
          severity="success"
          sx={{
            position: "fixed",
            top: 30,
            left: 0,
            zIndex: 9999,
            margin: 1,
          }}
        >
          {error?.success}
        </Alert>
      )}
    </>
  );
};

export default TeacherReg;
