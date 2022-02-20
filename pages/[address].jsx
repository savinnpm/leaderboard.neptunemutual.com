import { Header } from "../components/Header";
import { ChevronLeftIcon, SearchIcon } from "@heroicons/react/outline";
import { AddressCard } from "../components/AddressCard";
import { Table } from "../components/Table";
import { useRouter } from "next/router";

export default function Events() {
  const router = useRouter();

  return (
    <>
      <Header />

      {/* Back */}
      <div className="container mx-auto px-4 mt-16">
        <div className="inline-flex items-center">
          <ChevronLeftIcon width={16} />
          <button className="text-blue-500" onClick={() => router.back()}>
            Back
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="container mx-auto px-4 mt-12 mb-24">
        <Table />
      </div>
    </>
  );
}
