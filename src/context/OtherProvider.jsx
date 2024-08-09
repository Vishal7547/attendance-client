import React, { useState } from "react";
import { otherContext } from "./context";
import { useContext } from "react";
export const useNav = () => {
  return useContext(otherContext);
};
const OtherProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <otherContext.Provider
      value={{ open, handleDrawerOpen, handleDrawerClose }}
    >
      {children}
    </otherContext.Provider>
  );
};

export default OtherProvider;
