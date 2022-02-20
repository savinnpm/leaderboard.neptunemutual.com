import { Header } from "../components/Header";
import { SearchIcon } from "@heroicons/react/outline";
import { AddressCard } from "../components/AddressCard";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="container mx-auto px-4 mt-16">
        <h1 className="text-4xl font-bold text-center">Leaderboard 🏆</h1>
        <p className="text-center mt-4">
          Try to find yourself in top 8. Good Luck!
        </p>
      </div>

      {/* Search bar */}
      <div className="container mx-auto px-4 max-w-3xl mt-10">
        <label
          htmlFor="search_by_address"
          className="block text-sm font-medium text-gray-700 sr-only"
        >
          Search your address ...
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="inline-block text-gray-500 sm:text-sm">
              <SearchIcon width={14} height={14} />
            </span>
          </div>
          <input
            type="text"
            name="search_by_address"
            id="search_by_address"
            className="focus:ring-blue-500 focus:border-blue-500 border block w-full py-3.5 pl-8 pr-4 sm:text-sm border-gray-300 rounded-lg"
            placeholder="Search your address ..."
          />
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 mt-12 mb-24">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </div>
      </div>
    </>
  );
}
