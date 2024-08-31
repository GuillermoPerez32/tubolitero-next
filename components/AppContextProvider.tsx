"use client";
import { ReactNode, useState } from "react";
import AppContext from "../lib/utils/AppContext";
import Drawer from "./Drawer";
import { Lottery } from "@/lib/types/LotteryResponse";

export const AppContextProvider = ({
  children,
  lotteries,
}: {
  children: ReactNode;
  lotteries: Lottery[];
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        drawerOpen: drawerOpen,
        toggleDrawer: () => setDrawerOpen(!drawerOpen),
      }}
    >
      <Drawer lotteries={lotteries} />
      {children}
    </AppContext.Provider>
  );
};
