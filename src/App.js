import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Students from "./pages/students/Students";

import Login from "./pages/auth/Login";
import StudentsRegistration from "./pages/students/StudentsRegestration";
import Staff from "./pages/staff/Staff";
import Leave from "./pages/leave/Leave";
import Attendance from "./pages/Attendance/Attendance";
import IndividualAttendance from "./pages/Attendance/IndividualAttendance";
import LeaveApplication from "./pages/leave/LeaveApplication";
import TakeAttendance from "./pages/Attendance/TakeAttendance";
import Feedback from "./pages/feedback/Feedback";
import FeedbackData from "./pages/feedback/FeedbackData";
import FeedbackQuestions from "./pages/feedback/FeedbackQuestions";
import Activity from "./pages/activity/Activity";
import IndividualAnalysis from "./pages/Attendance/IndividualAnalysis";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Students />} />
          <Route path="/staff" element={<Staff />} />
          <Route
            path="/student-registration"
            element={<StudentsRegistration />}
          />
          <Route path="/student-leave" element={<Leave />} />
          <Route
            path="/student-attendance/:semester/:branch/:session"
            element={<Attendance />}
          />
          <Route
            path="/student-individual-attendance/:userId/:subjectId"
            element={<IndividualAttendance />}
          />
          <Route
            path="/student-individual-analysis/:id"
            element={<IndividualAnalysis />}
          />

          <Route
            path="/student-application/:id"
            element={<LeaveApplication />}
          />
          <Route
            path="/student-take-application/:id"
            element={<TakeAttendance />}
          />
          <Route path="/student-feedback" element={<Feedback />} />
          <Route path="/student-feedback/:id" element={<FeedbackData />} />
          <Route
            path="/student-feedback-questions"
            element={<FeedbackQuestions />}
          />
          <Route path="/student-activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
