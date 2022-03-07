import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HallOfFame } from "../components/HallOfFame";
import Head from "next/head";
import { LIMIT, PAGE_DESCRIPTION, PAGE_TITLE } from "../config";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useGetLeaderboard } from "../hooks/useGetLeaderboard";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(LIMIT);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, isLoading } = useGetLeaderboard({
    skip,
    limit,
    searchTerm: debouncedSearchTerm,
  });
  const router = useRouter();

  useEffect(() => {
    setSkip(0);
    setLimit(LIMIT);
  }, [searchTerm]);

  useEffect(() => {
    if (router.query.skip && parseInt(router.query.skip) !== NaN)
      setSkip(parseInt(router.query.skip));
    if (router.query.limit && parseInt(router.query.limit) !== NaN)
      setLimit(parseInt(router.query.limit));
    if (!router.query.skip && !router.query.limit) {
      setSkip(0);
      setLimit(LIMIT);
    }
  }, [router]);

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
          loading={isLoading}
        />

        <Footer page={"leaderboard"} />
      </div>
    </>
  );
}
