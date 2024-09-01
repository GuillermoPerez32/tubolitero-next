import clsx from "clsx";
import { Lottery, Registro } from "../lib/types/LotteryResponse";
import { API_HOST } from "../lib/constants/endpoints";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import getHourlyLogo from "@/lib/utils/getHourlyLogo";

const LotteryCard = ({
  lottery: { nombre, logo, slug, pick3_logo, pick4_logo },
  color,
  result,
}: {
  result: Registro;
  lottery: Lottery;
  color: "purple" | "sky";
}) => {
  const date = moment(result.fecha);
  const dayName = date.format("dddd");
  const dateFormatted = date.format("l");
  return (
    <Link
      href={`/loterias/${slug}`}
      className={clsx(
        "w-80 p-4 shadow-sm bg-gradient-to-b to-white rounded-lg flex flex-col items-center",
        {
          "from-purple-300 border-purple-200 shadow-purple-200":
            color === "purple",
          "from-sky-300 border-sky-200 shadow-sky-200": color === "sky",
        }
      )}
    >
      <Image src={`${API_HOST}${logo}`} alt={nombre} height={45} width={45} />
      <p className="font-semibold text-2xl">{nombre}</p>
      <div className="flex items-center gap-4">
        <div className="text-center">
          <p className="font-bold text-lg text-slate-600">{dateFormatted}</p>
          <p className="font-bold text-lg text-slate-600">{dayName}</p>
        </div>
        <Image
          src={getHourlyLogo(result.horario)}
          alt="pick3-logo"
          height={40}
          width={40}
        />
      </div>

      <div className="text-white font-bold mt-2 grid grid-cols-3 place-items-center gap-2">
        <Image
          src={pick3_logo ? `${API_HOST}${pick3_logo}` : "/pick3.png"}
          alt="pick3-logo"
          height={40}
          width={60}
        />
        <div className="flex justify-center gap-1 col-span-2">
          <div className="bg-lime-600 p-1 rounded-full size-[30px] flex items-center justify-center">
            {result.pick3[0]}
          </div>
          <div className="bg-sky-600 p-1 rounded-full size-[30px] flex items-center justify-center">
            {result.pick3[1]}
          </div>
          <div className="bg-emerald-600 p-1 rounded-full size-[30px] flex items-center justify-center">
            {result.pick3[2]}
          </div>
        </div>
        <Image
          src={pick4_logo ? `${API_HOST}${pick4_logo}` : "/pick4.png"}
          alt="pick4-logo"
          height={40}
          width={60}
        />
        <div className="flex justify-evenly col-span-2">
          <div className="flex">
            <div className="bg-amber-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {result.pick4[0]}
            </div>
            <div className="bg-amber-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {result.pick4[1]}
            </div>
          </div>
          <div className="flex ml-4">
            <div className="bg-fuchsia-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {result.pick4[2]}
            </div>
            <div className="bg-fuchsia-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {result.pick4[3]}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LotteryCard;
