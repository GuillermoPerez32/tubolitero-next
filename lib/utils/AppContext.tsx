"use client";
import { createContext } from "react";
import AppContextType from "../types/AppContextType";

const AppContext = createContext<AppContextType>({
  drawerOpen: false,
  toggleDrawer: () => {},
});

export default AppContext;
