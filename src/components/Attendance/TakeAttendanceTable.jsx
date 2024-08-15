import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useNavigate } from "react-router-dom";
import { useAttendance } from "../../context/AttendanceProvider";
import Chip from "@mui/material/Chip";
import { Alert, Button } from "@mui/material";
import axios from "axios";
import TakeAttendance from "../../confirm/TakeAttendance";
import useModelHooks from "../../customHooks/useModel";

export default function TakeAttendanceTable() {
  const {
    attendanceStudents,
    attendanceUpdate,
    setAttendanceUpdate,
    setAttendanceStudents,
  } = useAttendance();
  const { open, handleOpen, handleClose } = useModelHooks();
  const navigate = useNavigate();
  const [attendance, setAttendance] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({
    backendError: "",
    success: "",
  });
  const [isError, setIsError] = React.useState({
    backendError: false,

    success: false,
  });
  React.useEffect(() => {
    const timeClear = setTimeout(() => {
      setIsError((prev) => ({ ...prev, backendError: false }));
    }, 2000);
    return () => {
      clearTimeout(timeClear);
    };
  }, [isError?.backendError]);
  React.useEffect(() => {
    const timeClear = setTimeout(() => {
      setIsError((prev) => ({ ...prev, success: false }));
    }, 2000);
    return () => {
      clearTimeout(timeClear);
    };
  }, [isError?.success]);
  React.useEffect(() => {
    setAttendance(attendanceStudents?.students);
  }, [attendanceStudents]);
  const handleToggle = (id) => {
    const info = attendance?.map((a) => {
      if (a?._id === id) {
        return { ...a, status: a?.status === "present" ? "absent" : "present" };
      }
      return a;
    });
    setAttendance(info);
  };

  const handleAttendance = async () => {
    // console.log(attendance);
    const currentAttendance = attendance?.map((a) => {
      return {
        student: a?._id,
        status: a?.status,
      };
    });
    console.log(currentAttendance);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/attendance`,
        {
          currentAttendance,
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
        // setAttendanceUpdate(!attendanceUpdate);
        setAttendanceStudents((prev) => ({
          ...prev,
          subject: data?.subject,
          students: data?.attendanceStudents,
          id: data?.id,
        }));
        setIsError((prev) => ({ ...prev, success: true }));
        setError((prev) => ({
          ...prev,
          success: "Attendance Recorded Successfully",
        }));
      } else {
        console.log(data.message);
        setIsError((prev) => ({ ...prev, backendError: true }));
        setError((prev) => ({
          ...prev,
          backendError: data?.message,
        }));
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
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
    heading: "Confirm Attendance Submission",
    subHeading:
      "Are you sure you want to submit the attendance for the selected students?",
    type: "submit_Take_Attendance",
  };

  const updateAttendance = async () => {
    // console.log(attendance);
    const currentAttendance = attendance?.map((a) => {
      return {
        student: a?._id,
        status: a?.status,
      };
    });
    console.log(currentAttendance);
    try {
      setLoading(true);
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/attendance/${attendanceStudents?.id}`,
        {
          currentAttendance,
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
        // setAttendanceUpdate(!attendanceUpdate);
        setAttendanceStudents((prev) => ({
          ...prev,
          subject: data?.subject,
          students: data?.attendanceStudents,
          id: data?.id,
        }));
        setIsError((prev) => ({ ...prev, success: true }));
        setError((prev) => ({
          ...prev,
          success: "Attendance Updated Successfully",
        }));
      } else {
        console.log(data.message);
        setIsError((prev) => ({ ...prev, backendError: true }));
        setError((prev) => ({
          ...prev,
          backendError: data?.message,
        }));
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
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
      <Box sx={{ width: "100%" }}>
        <Box>
          {attendanceStudents?.id ? (
            <Button
              variant="contained"
              sx={{ p: 1 }}
              onClick={updateAttendance}
            >
              {loading ? "Loading..." : " UPDATE ATTENDANCE"}
            </Button>
          ) : (
            <Button variant="contained" sx={{ p: 1 }} onClick={handleOpen}>
              {loading ? "Loading..." : "  LOCK ATTENDANCE"}
            </Button>
          )}
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableBody>
              {attendance?.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row?.userName}
                    </TableCell>
                    <TableCell>{row?.userRegNo}</TableCell>
                    <TableCell>20/30</TableCell>
                    <TableCell onClick={() => handleToggle(row?._id)}>
                      <Chip
                        label={row?.status}
                        color={row?.status === "present" ? "success" : "error"}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
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
      <TakeAttendance
        handleClose={handleClose}
        open={open}
        message={message}
        handleAttendance={handleAttendance}
      />
    </>
  );
}
