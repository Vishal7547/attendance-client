import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
const AccountSetting = () => {
  return (
    <List
      sx={{
        width: "100%",

        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 1,
        boxShadow: 3,
      }}
    >
      <ListItem sx={{ cursor: "pointer" }}>
        <ListItemAvatar>
          <Avatar sx={{ width: 30, height: 30 }}>
            <AdminPanelSettingsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Account Setting"
          sx={{
            color: (theme) => (theme.palette.mode === "dark" ? "#fff" : "#000"),
          }}
        />
      </ListItem>
      <ListItem sx={{ cursor: "pointer" }}>
        <ListItemAvatar>
          <Avatar sx={{ width: 30, height: 30 }}>
            <ExitToAppIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="LogOut"
          sx={{
            color: (theme) => (theme.palette.mode === "dark" ? "#fff" : "#000"),
          }}
        />
      </ListItem>
    </List>
  );
};

export default AccountSetting;
