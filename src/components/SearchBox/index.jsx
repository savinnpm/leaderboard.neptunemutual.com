import { SearchIcon } from "@heroicons/react/outline";
import styles from "./styles.module.scss";

export const SearchBox = () => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="search_by_address" className="sr-only">
        Search an Address ...
      </label>
      <div className={styles.input_wrapper}>
        <div className={styles.icon_wrapper}>
          <SearchIcon width={14} height={14} />
        </div>
        <input
          type="text"
          name="search_by_address"
          id="search_by_address"
          className="focus:ring-blue-500 focus:border-blue-500 border block w-full py-3.5 pl-8 pr-4 sm:text-sm border-gray-300 rounded-lg"
          placeholder="Search an Address ..."
        />
      </div>
    </div>
  );
};
