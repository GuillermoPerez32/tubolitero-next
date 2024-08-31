import { currentYear } from "@/lib/constants/dates";
import { fetchApkInfo } from "@/lib/api/apk";
import { fetchAllLotteries } from "@/lib/api/lotteries";
import LotteryCard from "@/components/LotteryCard";
import Link from "next/link";
import AppBar from "@/components/AppBar";
import Image from "next/image";

export default async function Home() {
  const apkData = await fetchApkInfo();
  const lotteries = await fetchAllLotteries();

  return (
    <>
      <AppBar title={`Tu Bolitero ${currentYear}`} />
      <div className="w-full mt-8">
        <Link
          href={apkData?.apk.replace("http", "https") || "#"}
          className="mx-auto flex justify-center items-center gap-4 w-60"
        >
          <p className="font-bold text-xl">Descarga la apk</p>
          <Image
            className="animate-bounce rounded-full"
            src="/apk-logo.png"
            alt="logo de la apk"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 py-8 px-4">
        {lotteries.map((lottery, i) => (
          <LotteryCard
            key={lottery.id}
            lottery={lottery}
            color={i % 2 === 0 ? "sky" : "purple"}
          />
        ))}
      </div>
    </>
  );
}
