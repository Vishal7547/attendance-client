import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Grid, Button, Chip, FormHelperText } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
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

const SelectSession = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const { session: ses, semester: sem, branch } = useUser();
  const [session, setSession] = useState("");
  const [semester, setSemester] = useState("");
  const [listBranch, setListBranch] = useState(null);
  const [error, setError] = useState({
    session: "",
    semester: "",
  });
  const [isError, setIsError] = useState({
    session: false,
    semester: false,
  });
  const handleNext = () => {
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
    handleClose();
    const branch_id = branch?.find((b) => b?.branchName === "ECE");
    if (branch_id) {
      navigate(`/student-attendance/${semester}/${branch_id?._id}/${session}`);
    }
  };
  return (
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
                  value={session}
                  error={isError.session}
                  onChange={(e) => setSession(e.target.value)}
                >
                  {ses?.map((s) => (
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
                  {error?.session}
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
                  value={semester}
                  error={isError.semester}
                  onChange={(e) => setSemester(e.target.value)}
                >
                  {sem?.map((s) => (
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
                  {error?.semester}
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
  );
};

export default SelectSession;
