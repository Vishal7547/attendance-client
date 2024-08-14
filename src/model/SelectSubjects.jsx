import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Button, Chip, FormHelperText, Alert } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TakeAttendance from "../confirm/TakeAttendance";
import useModelHooks from "../customHooks/useModel";
import { useUser } from "../context/UserProvider";
import { FaBullseye } from "react-icons/fa";
import axios from "axios";
import { useAttendance } from "../context/AttendanceProvider";

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

const SelectSubjects = ({ open, handleClose }) => {
  const { user, session, semester } = useUser();
  const { setAttendanceStudents } = useAttendance();
  const [selectSubject, setSelectSubject] = useState([]);
  const [sessionRecord, setSessionRecord] = useState("");
  const [semesterRecord, setSemesterRecord] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    sessionRecord: "",
    semesterRecord: "",
    backendError: "",
    branch: "",
    subject: "",
    success: "",
  });
  const [isError, setIsError] = useState({
    sessionRecord: false,
    semesterRecord: false,
    backendError: false,
    branch: false,
    subject: false,
    success: false,
  });
  useEffect(() => {
    const timeClear = setTimeout(() => {
      setIsError((prev) => ({ ...prev, backendError: false }));
    }, 2000);
    return () => {
      clearTimeout(timeClear);
    };
  }, [isError?.backendError]);
  useEffect(() => {
    const filtered = user?.userAssignSubject.filter(
      (s) => s?.branch === branch
    );

    setSelectSubject(filtered);
  }, [branch]);

  const {
    open: open1,
    handleClose: handleClose1,
    handleOpen: handleOpen1,
  } = useModelHooks();

  const handleNext = async () => {
    if (!sessionRecord) {
      setError((prev) => ({
        ...prev,
        sessionRecord: "sessionRecord is missing",
      }));
      setIsError((prev) => ({ ...prev, sessionRecord: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, sessionRecord: "" }));
      setIsError((prev) => ({ ...prev, sessionRecord: false }));
    }
    if (!semesterRecord) {
      setError((prev) => ({
        ...prev,
        semesterRecord: "semesterRecord is missing",
      }));
      setIsError((prev) => ({ ...prev, semesterRecord: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, semesterRecord: "" }));
      setIsError((prev) => ({ ...prev, semesterRecord: false }));
    }

    if (!branch) {
      setError((prev) => ({ ...prev, branch: "branch is missing" }));
      setIsError((prev) => ({ ...prev, branch: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, branch: "" }));
      setIsError((prev) => ({ ...prev, branch: false }));
    }
    if (!subject) {
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
        `${process.env.REACT_APP_BACKEND_URL}/attendance/default`,
        {
          session: sessionRecord,
          semester: semesterRecord,
          branch: branch,
          subject: subject,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (data.success) {
        console.log(data);
        // setAttendanceStudents(data?.attendanceStudents);
        setLoading(false);
        handleClose();
        handleOpen1();
        // handleClear();

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
  const message = {
    heading: "Are you sure you want to take attendance?",
    subHeading:
      "If you agree, then by default all student attendance will be marked as present. The button will behave like a toggle: if it is marked present, clicking it will change the status to absent, and vice versa. The time of attendance will also be recorded. Are you agree with this?",
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
                <Chip label="Select Session" size="large" />
              </Divider>
            </Typography>
          </Box>

          <Box mt={1}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Session
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Session"
                    value={sessionRecord}
                    onChange={(e) => setSessionRecord(e.target.value)}
                    error={isError.sessionRecord}
                  >
                    {session?.map((s) => (
                      <MenuItem value={s?._id} key={s?._id}>
                        {s?.sessionName}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText
                    sx={{
                      color: "red",
                    }}
                  >
                    {error?.sessionRecord}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Sem
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sem"
                    value={semesterRecord}
                    onChange={(e) => setSemesterRecord(e.target.value)}
                    error={isError.semesterRecord}
                  >
                    {semester?.map((s) => (
                      <MenuItem value={s?._id} key={s?._id}>
                        {s?.semesterName}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText
                    sx={{
                      color: "red",
                    }}
                  >
                    {error?.semesterRecord}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Branch
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sub"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    error={isError.branch}
                  >
                    {user?.userDepartment?.map((s) => (
                      <MenuItem value={s?._id} key={s?._id}>
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
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Sub
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sub"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    error={isError.subject}
                  >
                    {selectSubject?.map((s) => (
                      <MenuItem value={s?._id} key={s?._id}>
                        {s?.subjectName}
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
                <Button variant="contained" type="button" onClick={handleNext}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
      <TakeAttendance
        open={open1}
        handleClose={handleClose1}
        message={message}
      />
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
    </>
  );
};

export default SelectSubjects;
