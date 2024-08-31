"use client";
import { useContext } from "react";
import AppContext from "../lib/utils/AppContext";
import Link from "next/link";
import { Routes } from "../lib/constants/routes";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AppBar = ({ title }: { title: string }) => {
  const { toggleDrawer } = useContext(AppContext);

  const path = usePathname();

  console.log(path);

  return (
    <div className="flex items-center p-2">
      {path === "/" ? (
        <button onClick={() => toggleDrawer()}>
          <Image src="menu.svg" alt="menu" width={48} height={48} />
        </button>
      ) : (
        <Link href={Routes.HOME}>
          <Image src="/arrow-back.svg" alt="menu" width={48} height={48} />
        </Link>
      )}
      <h1 className="font-medium text-2xl mx-auto">{title}</h1>
    </div>
  );
};

export default AppBar;
