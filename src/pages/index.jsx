import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HallOfFame } from "../components/HallOfFame";
import Head from "next/head";
import { PAGE_DESCRIPTION, PAGE_TITLE } from "../config";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useGetLeaderboard } from "../hooks/useGetLeaderboard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data } = useGetLeaderboard({
    skip,
    limit,
    searchTerm: debouncedSearchTerm,
  });

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </Head>

      <Header />

      <Hero pointsEarned={data.pointsEarned} totalUsers={data.totalUsers} />

      <HallOfFame
        data={data.items}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        skip={skip}
        setSkip={setSkip}
        limit={limit}
        setLimit={setLimit}
        totalUsers={data.totalUsers}
      />
    </>
  );
}
