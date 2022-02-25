import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HallOfFame } from "../components/HallOfFame";
import Head from "next/head";
import { LIMIT, PAGE_DESCRIPTION, PAGE_TITLE } from "../config";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useGetLeaderboard } from "../hooks/useGetLeaderboard";
import { Footer } from "../components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(LIMIT);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data } = useGetLeaderboard({
    skip,
    limit,
    searchTerm: debouncedSearchTerm,
  });

  useEffect(() => {
    setSkip(0);
    setLimit(LIMIT);
  }, [searchTerm]);

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </Head>

      <Header />

      <div className="content">
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

        <Footer />
      </div>
    </>
  );
}
