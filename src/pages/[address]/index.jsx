import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { BackButton } from "../../components/BackButton";
import { AddressTitleBar } from "../../components/AddressTitleBar";
import { EventsTable } from "../../components/EventsTable";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useAccountInfo } from "../../hooks/useAccountInfo";

export default function Events() {
  const router = useRouter();
  const { address } = router.query;

  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
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

      <BackButton />

      <AddressTitleBar address={address} points={150} />

      {/* Table */}
      <div className="container">
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
    </>
  );
}
