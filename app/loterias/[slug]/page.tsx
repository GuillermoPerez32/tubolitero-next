import AppBar from "@/components/AppBar";
import HistoryCard from "@/components/HistoryCard";
import LotteryDetailCard from "@/components/LotteryDetailCard";
import { fetchLotteryBySlug } from "@/lib/api/lotteries";
import { API_HOST } from "@/lib/constants/endpoints";
import moment from "moment";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const lottery = await fetchLotteryBySlug(slug);

  const dates = lottery.ultimo_dia.map(
    (result) =>
      `${lottery.nombre}-${moment(result.fecha).format(
        "YYYY-MM-DD HH:mm:ss"
      )} ${result.pick3}-${result.pick4}`
  );

  const formatedDates = dates.join(" ");

  return {
    title: lottery.nombre,
    description: `Resultados de lotería de ${lottery.nombre} de hoy. Charada numeros ganadores de ${lottery.nombre} hoy: ${formatedDates}`,
  };
}

export default async function LotteryDetail({ params: { slug } }: Props) {
  const lottery = await fetchLotteryBySlug(slug);
  const { nombre, ultimo_dia, logo, anteriores } = lottery;

  return (
    <>
      <AppBar
        title={
          <div className="flex items-center gap-2">
            <span>Lotería {nombre}</span>
            <Image
              src={`${API_HOST}${logo}`}
              alt="logo"
              width={45}
              height={45}
            />
          </div>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
        {ultimo_dia.map((result, i) => (
          <LotteryDetailCard
            key={result.fecha.toString()}
            result={result}
            color={i % 2 === 0 ? "purple" : "sky"}
            lottery={lottery}
          />
        ))}
      </div>

      <div className="mt-12 px-8">
        <h2 className="text-center text-2xl">Resultados anteriores</h2>
        <div className="flex justify-between my-6 text-lg text-slate-600 w-72 mx-auto">
          <span>Fecha</span>
          <span>Resultado</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          {anteriores.map((result) => (
            <HistoryCard key={result.fecha.toString()} result={result} />
          ))}
        </div>
      </div>
    </>
  );
}
