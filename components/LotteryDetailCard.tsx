import { API_HOST } from "@/lib/constants/endpoints";
import { Lottery, Registro } from "@/lib/types/LotteryResponse";
import getHourlyLogo from "@/lib/utils/getHourlyLogo";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import React from "react";

type Props = {
  lottery: Lottery;
  result: Registro;
  color: "purple" | "sky";
};

const LotteryDetailCard = ({
  result,
  color,
  lottery: { pick3_logo, pick4_logo },
}: Props) => {
  const { fecha, pick3, pick4, horario } = result;
  const date = moment(fecha);
  const dayName = date.format("dddd");
  const dateFormatted = date.format("l");

  return (
    <div
      className={clsx(
        "w-80 p-4 shadow-sm bg-gradient-to-b to-white rounded-lg flex justify-center text-center font-medium text-xl",
        {
          "from-purple-300 border-purple-200 shadow-purple-200":
            color === "purple",
          "from-sky-300 border-sky-200 shadow-sky-200": color === "sky",
        }
      )}
    >
      <div className="flex flex-col items-center">
        <p>{dayName}</p>
        <Image
          src={getHourlyLogo(horario)}
          alt={horario}
          width={70}
          height={70}
        />
        <p>{dateFormatted}</p>
      </div>
      <div className="h-auto w-[1px] bg-black mx-8" />
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          {pick3_logo ? (
            <Image
              src={`${API_HOST}${pick3_logo}`}
              alt="pick3-logo"
              height={25}
              width={40}
            />
          ) : (
            <div className="flex">
              <span>Pick</span>
              <div className="bg-yellow-200 p-2 rounded-full size-6 ml-3 text-lg flex justify-center items-center">
                3
              </div>
            </div>
          )}
          <div>{pick3}</div>
        </div>
        <div className="flex flex-col items-center">
          {pick4_logo ? (
            <Image
              src={`${API_HOST}${pick4_logo}`}
              alt="pick4-logo"
              height={25}
              width={40}
            />
          ) : (
            <div className="flex">
              <span>Pick</span>
              <div className="bg-green-200 p-2 rounded-full size-6 ml-3 text-lg flex justify-center items-center">
                4
              </div>
            </div>
          )}
          <div>{pick4}</div>
        </div>
      </div>
    </div>
  );
};

export default LotteryDetailCard;
