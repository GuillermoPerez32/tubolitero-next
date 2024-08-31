"use client";
import { ReactNode, useState } from "react";
import AppContext from "../lib/utils/AppContext";
import Drawer from "./Drawer";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        drawerOpen: drawerOpen,
        toggleDrawer: () => setDrawerOpen(!drawerOpen),
      }}
    >
      <Drawer />
      {children}
    </AppContext.Provider>
  );
};
