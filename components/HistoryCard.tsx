import { API_HOST } from "@/lib/constants/endpoints";
import { Registro } from "@/lib/types/LotteryResponse";
import getHourlyLogo from "@/lib/utils/getHourlyLogo";
import moment from "moment";
import Image from "next/image";
import React from "react";

type Props = {
  result: Registro;
};

function HistoryCard({ result: { pick3, pick4, horario, fecha } }: Props) {
  const date = moment(fecha);
  const formattedDate = date.format("DD-MM-YYYY");
  const formattedHour = date.format("h:mm a");

  return (
    <div className="w-80 p-4 shadow-sm bg-stone-200 rounded-lg flex justify-between">
      <div className="text-lg">
        <p>{formattedDate}</p>
        <div className="flex items-center gap-2">
          <span>{formattedHour}</span>
          <Image
            src={getHourlyLogo(horario)}
            alt={horario}
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-white font-medium mt-2 flex flex-col gap-2">
          <div className="flex justify-center gap-1">
            <div className="bg-lime-600 p-1 rounded-full size-[24px] flex items-center justify-center">
              {pick3[0]}
            </div>
            <div className="bg-sky-600 p-1 rounded-full size-[24px] flex items-center justify-center">
              {pick3[1]}
            </div>
            <div className="bg-emerald-600 p-1 rounded-full size-[24px] flex items-center justify-center">
              {pick3[2]}
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="flex">
              <div className="bg-amber-600 p-1 rounded-full size-[24px] flex items-center justify-center">
                {pick4[0]}
              </div>
              <div className="bg-amber-600 p-1 rounded-full size-[24px] flex items-center justify-center">
                {pick4[1]}
              </div>
            </div>
            <div className="flex">
              <div className="bg-fuchsia-600 p-1 rounded-full size-[24px] flex items-center justify-center">
                {pick4[2]}
              </div>
              <div className="bg-fuchsia-600 p-1 rounded-full size-[24px] flex items-center justify-center">
                {pick4[3]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
