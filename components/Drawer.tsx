"use client";
import clsx from "clsx";
import { useContext } from "react";
import AppContext from "../lib/utils/AppContext";
import Link from "next/link";
import Image from "next/image";
import { Lottery } from "@/lib/types/LotteryResponse";
import { API_HOST } from "@/lib/constants/endpoints";

const Drawer = ({ lotteries }: { lotteries: Lottery[] }) => {
  const { drawerOpen, toggleDrawer } = useContext(AppContext);

  return (
    <div
      className={clsx("absolute flex h-svh w-svw", {
        "opacity-100 z-0": drawerOpen,
        "opacity-0 select-none -z-10": !drawerOpen,
      })}
    >
      <div
        className={clsx(
          "bg-slate-200 transition-all opacity-95 h-full absolute -z-10",
          {
            "w-3/5 sm:w-96": drawerOpen,
            "w-0": !drawerOpen,
          }
        )}
      />
      <div
        className={clsx("transition-all h-full text-lg text-slate-800", {
          "w-3/5 sm:w-96": drawerOpen,
          "w-0": !drawerOpen,
        })}
      >
        <Link href="/">
          <div className="p-4">Todas las loterías</div>
        </Link>
        <div className="h-[1px] w-full bg-slate-500" />
        <a href="https://whatsapp.com/channel/0029VaCVnwn9mrGZA0iKjd0t">
          <div className="p-4 flex items-center gap-2">
            <div>Sigenos en</div>
            <Image
              className="ml-auto"
              src="/wa.png"
              alt="whatsapp logo"
              width={35}
              height={35}
            />
          </div>
        </a>
        <div className="h-[1px] w-full bg-slate-500" />
        <a href="https://t.me/Tu_boliteros">
          <div className="p-4 flex items-center gap-2">
            <div>Sigenos en</div>
            <Image
              className="ml-auto"
              src="/t.png"
              alt="whatsapp logo"
              width={35}
              height={35}
            />
          </div>
        </a>
        {lotteries.map(({ id, nombre, slug, logo }) => (
          <>
            <div className="h-[1px] w-full bg-slate-500" />
            <Link key={id} href={`/loterias/${slug}`}>
              <div className="p-4 flex items-center gap-4">
                <span>{nombre}</span>
                <Image
                  className="ml-auto"
                  src={`${API_HOST}${logo}`}
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </>
        ))}
      </div>
      <div onClick={() => toggleDrawer()} className="w-2/5 sm:w-full h-full" />
    </div>
  );
};

export default Drawer;
