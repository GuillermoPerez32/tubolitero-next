import clsx from "clsx";
import { Lottery } from "../lib/types/LotteryResponse";
import { API_HOST } from "../lib/constants/endpoints";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const LotteryCard = ({
  lottery: { nombre, logo, ultima, slug, pick3_logo, pick4_logo },
  color,
}: {
  lottery: Lottery;
  color: "purple" | "sky";
}) => {
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
      <p className="font-bold text-lg text-slate-600">
        {moment(ultima.fecha).format("l")}
      </p>

      <div className="text-white font-bold mt-2 w-44 flex flex-col gap-2">
        <div className="flex justify-center gap-1">
          <div className="bg-lime-600 p-1 rounded-full size-[30px] flex items-center justify-center">
            {ultima.pick3[0]}
          </div>
          <div className="bg-sky-600 p-1 rounded-full size-[30px] flex items-center justify-center">
            {ultima.pick3[1]}
          </div>
          <div className="bg-emerald-600 p-1 rounded-full size-[30px] flex items-center justify-center">
            {ultima.pick3[2]}
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex">
            <div className="bg-amber-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {ultima.pick4[0]}
            </div>
            <div className="bg-amber-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {ultima.pick4[1]}
            </div>
          </div>
          <div className="flex">
            <div className="bg-fuchsia-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {ultima.pick4[2]}
            </div>
            <div className="bg-fuchsia-600 p-1 rounded-full size-[30px] flex items-center justify-center">
              {ultima.pick4[3]}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LotteryCard;
