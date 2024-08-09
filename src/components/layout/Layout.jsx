import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { useNav } from "../../context/OtherProvider";

const Layout = ({ children }) => {
  const { open } = useNav();
  return (
    <Box>
      <Sidebar />
      <Box
        sx={{
          //   marginLeft: open ? 30 : 7,
          marginLeft: 10,

          marginTop: 10,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
