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

      <div className="container mx-auto px-4 mt-10">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            0xeC73559994D5E4Ca5a16a90a14203A2dae50b545
          </div>
          <div className="font-semibold text-2xl">🏆 +150</div>
        </div>
      </div>

      {/* Table */}
      <div className="container mx-auto px-4 mt-5 mb-24">
        <Table />
      </div>
    </>
  );
}
