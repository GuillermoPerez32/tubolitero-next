"use client";
import clsx from "clsx";
import { useContext } from "react";
import AppContext from "../lib/utils/AppContext";

const Drawer = () => {
  const { drawerOpen, toggleDrawer } = useContext(AppContext);
  return (
    <div
      className={clsx("absolute flex h-svh w-svw", {
        "opacity-100 z-0": drawerOpen,
        "opacity-0 select-none -z-10": !drawerOpen,
      })}
    >
      <div
        className={clsx("bg-slate-400 transition-all opacity-95 h-full", {
          "w-3/5 sm:w-96": drawerOpen,
          "w-0": !drawerOpen,
        })}
      ></div>
      <div
        onClick={() => toggleDrawer()}
        className="w-2/5 sm:w-full h-full"
      ></div>
    </div>
  );
};

export default Drawer;
