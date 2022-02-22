import { Header } from "../components/Header";
import { AddressRow } from "../components/AddressRow";
import { useGetLeaderboard } from "../hooks/useGetLeaderboard";
import { Hero } from "../components/Hero";
import { SearchBox } from "../components/SearchBox";
import { HallOfFame } from "../components/HallOfFame";
import Head from "next/head";
import { PAGE_DESCRIPTION, PAGE_TITLE } from "../config";

export default function Home() {
  const { data } = useGetLeaderboard();

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </Head>

      <Header />

      <Hero pointsEarned={data.pointsEarned} totalUsers={data.totalUsers} />

      <HallOfFame data={data.items} />
    </>
  );
}
