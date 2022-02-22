import { Header } from "../components/Header";
import { AddressRow } from "../components/AddressRow";
import { useGetLeaderboard } from "../hooks/useGetLeaderboard";
import { Hero } from "../components/Hero";
import { SearchBox } from "../components/SearchBox";
import { HallOfFame } from "../components/HallOfFame";

export default function Home() {
  const { data } = useGetLeaderboard();

  return (
    <>
      <Header />

      <Hero pointsEarned={data.pointsEarned} totalUsers={data.totalUsers} />

      <HallOfFame data={data.items} />
    </>
  );
}
