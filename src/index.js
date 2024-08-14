import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import CustomThemeProvider from "./context/ThemeProvider";
import OtherProvider from "./context/OtherProvider";
import UserProvider from "./context/UserProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AttendanceProvider from "./context/AttendanceProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <OtherProvider>
        <UserProvider>
          <AttendanceProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CssBaseline />
              <App />
            </LocalizationProvider>
          </AttendanceProvider>
        </UserProvider>
      </OtherProvider>
    </CustomThemeProvider>
  </React.StrictMode>
);
