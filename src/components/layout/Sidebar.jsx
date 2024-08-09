import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./Navbar";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import GroupIcon from "@mui/icons-material/Group";
import { FiActivity } from "react-icons/fi";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedbackIcon from "@mui/icons-material/Feedback";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNav } from "../../context/OtherProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import useModelHooks from "../../customHooks/useModel";
import SelectSession from "../../model/SelectSession";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SelectSubjects from "../../model/SelectSubjects";
import AddCommentIcon from "@mui/icons-material/AddComment";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 0,

  [theme.breakpoints.up("md")]: {
    zIndex: theme.zIndex.drawer + 1,
  },

  [theme.breakpoints.down("md")]: {
    zIndex: theme.zIndex.drawer + 0,
  },

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const upperList = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icons: <DashboardCustomizeIcon />,
  },
  {
    name: "Staff Section",
    url: "/staff",
    icons: <SupervisedUserCircleIcon />,
  },
  {
    name: "Student View",
    url: "/student",
    icons: <GroupIcon />,
  },
  {
    name: "Activity",
    url: "/student-activity",
    icons: <FiActivity />,
  },
];

const lowerList = [
  {
    name: "Attendance",
    unique: "attendance",
    url: "/student-attendance",
    icons: <AssessmentIcon />,
  },
  {
    name: "Leave",
    unique: "leave",
    url: "/student-leave",
    icons: <CalendarMonthIcon />,
  },
  {
    name: "Feedback",
    url: "/student-feedback",
    icons: <FeedbackIcon />,
  },

  {
    name: "Take Attendance",
    unique: "take_attendance",
    url: "",
    icons: <TrackChangesIcon />,
  },
  {
    name: "Feedback Question",
    unique: "feedback_question",
    url: "/student-feedback-questions",
    icons: <AddCommentIcon />,
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const { open, handleDrawerOpen, handleDrawerClose } = useNav();
  const navigate = useNavigate();
  const { open: open1, handleOpen, handleClose } = useModelHooks();
  const {
    open: open2,
    handleOpen: handleOpen2,
    handleClose: handleClose2,
  } = useModelHooks();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )} */}
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {upperList.map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate(text.url)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.icons}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {lowerList.map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                text.unique !== "attendance" &&
                text.unique !== "take_attendance"
                  ? navigate(text.url)
                  : text.unique === `take_attendance`
                  ? handleOpen2()
                  : handleOpen();
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.icons}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <SelectSession open={open1} handleClose={handleClose} />
      <SelectSubjects open={open2} handleClose={handleClose2} />
    </Box>
  );
}
