import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { BackButton } from "../../components/BackButton";
import { AddressTitleBar } from "../../components/AddressTitleBar";
import { EventsTable } from "../../components/EventsTable";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useAccountInfo } from "../../hooks/useAccountInfo";
import { Footer } from "../../components/Footer";
import { UserDetails } from "../../components/UserDetails";
import { LIMIT } from "../../config";

export default function Events() {
  const router = useRouter();
  const { address } = router.query;

  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(LIMIT);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data } = useAccountInfo({
    address,
    skip,
    limit,
    searchTerm: debouncedSearchTerm,
  });

  return (
    <>
      <Header />

      <div className="content">
        <BackButton />

        <div className="container">
          <UserDetails data={data.user} />

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
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
