import { unstable_cache } from "next/cache";
import { Endpoints } from "../constants/endpoints";
import { Lottery, LotteryDetail } from "../types/LotteryResponse";

export const fetchAllLotteries = unstable_cache(
  async () => {
    const response = await fetch(Endpoints.lotteries, {});

    return (await response.json()) as Lottery[];
  },
  ["lotteryList"],
  { revalidate: 10, tags: ["lotteryList"] }
);

export const fetchLotteryBySlug = unstable_cache(
  async (slug: string) => {
    const lotteries = await fetchAllLotteries();
    const lotteryId = lotteries.filter((lottery) => lottery.slug === slug)[0]
      .id;

    const response = await fetch(`${Endpoints.lotteries}/${lotteryId}`);
    return (await response.json()) as LotteryDetail;
  },
  ["lotteryDetail"],
  { revalidate: 10, tags: ["lotteryDetail"] }
);
