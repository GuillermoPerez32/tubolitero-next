import { fetchLotteryBySlug } from "@/lib/api/lotteries";
import moment from "moment";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
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
  const lotteryDetail = await fetchLotteryBySlug(slug);
  return <div>LotteryDetail: {lotteryDetail.nombre}</div>;
}
