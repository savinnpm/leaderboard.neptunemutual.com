import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { BackButton } from "../../components/BackButton";
import { AddressTitleBar } from "../../components/AddressTitleBar";
import { EventsTable } from "../../components/EventsTable";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useAccountInfo } from "../../hooks/useAccountInfo";
import { Footer } from "../../components/Footer";
import { UserDetails } from "../../components/UserDetails";
import { LIMIT } from "../../config";

export default function Events() {
  const router = useRouter();
  const { address } = router.query;

  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(null);
  const [limit, setLimit] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, isLoading } = useAccountInfo({
    address,
    skip,
    limit,
    searchTerm: debouncedSearchTerm,
  });

  useEffect(() => {
    if (router.isReady) {
      if (router.query.skip && !isNaN(parseInt(router.query.skip)))
        setSkip(parseInt(router.query.skip));
      if (router.query.limit && !isNaN(parseInt(router.query.limit)))
        setLimit(parseInt(router.query.limit));
      if (!router.query.skip && !router.query.limit) {
        setSkip(0);
        setLimit(LIMIT);
      }
    }
  }, [router]);

  return (
    <>
      <Header />

      <div className="content">
        <BackButton />

        <div className="container">
          {data.user && <UserDetails data={data.user} rank={data.rank} />}
          <AddressTitleBar address={address} points={data.totalPoints} />

          {/* Table */}
          <EventsTable
            data={data.items}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            skip={skip}
            setSkip={setSkip}
            limit={limit}
            setLimit={setLimit}
            records={data.records}
            loading={isLoading}
          />
        </div>

        <Footer page={"profile"} points={data.totalPoints} />
      </div>
    </>
  );
}
