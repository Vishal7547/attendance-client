import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Button, Chip, FormHelperText } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

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

const SelectAttendanceType = ({ open, handleClose, userInfo }) => {
  const navigate = useNavigate();
  const { subject: sub } = useUser();
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [listBranch, setListBranch] = useState(null);
  const [error, setError] = useState({
    type: "",
    subject: "",
  });
  const [isError, setIsError] = useState({
    type: false,
    subject: false,
  });
  useEffect(() => {
    const filterSubject = sub.filter((s) => {
      return (
        s?.branch === userInfo?.userBranch?._id &&
        s?.semester === userInfo?.userSemester?._id
      );
    });
    setListBranch(filterSubject);
    // console.log(filterSubject);
  }, [userInfo]);
  const handleNext = () => {
    if (!type) {
      setError((prev) => ({ ...prev, type: "type is missing" }));
      setIsError((prev) => ({ ...prev, type: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, type: "" }));
      setIsError((prev) => ({ ...prev, type: false }));
    }

    if (!subject) {
      setError((prev) => ({ ...prev, subject: "subject is missing" }));
      setIsError((prev) => ({ ...prev, subject: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, subject: "" }));
      setIsError((prev) => ({ ...prev, subject: false }));
    }
    handleClose();
    if (type === "2") {
      navigate(`/student-individual-attendance/${userInfo?._id}/${subject}`);
    } else {
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
                <Chip label="Select Attendance Type" size="large" />
              </Divider>
            </Typography>
          </Box>

          <Box mt={1}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Attendance Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="  Attendance Type"
                    value={type}
                    error={isError.type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value="1">Analysis</MenuItem>
                    <MenuItem value="2">Row Form</MenuItem>
                  </Select>
                  <FormHelperText
                    sx={{
                      color: "red",
                    }}
                  >
                    {error?.type}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Subject
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Subject"
                    value={subject}
                    error={isError.subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    {listBranch?.map((s) => (
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
    </>
  );
};

export default SelectAttendanceType;
