import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { SearchBox } from "../SearchBox";
import styles from "./styles.module.scss";

export const Pagination = ({
  searchTerm,
  setSearchTerm,
  skip,
  setSkip,
  limit,
  setLimit,
  totalUsers,
}) => {
  return (
    <div className={styles.wrapper}>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className={styles.pagination_nav}>
        <input type="number" name="page" id="page" />

        <p>
          {skip + 1}-{skip + limit} of {totalUsers}
        </p>

        <button
          className={styles.pagination_btn}
          onClick={() => {
            setSkip((prev) => prev - limit);
          }}
          disabled={skip - limit < 0}
        >
          <ChevronLeftIcon height={24} />
        </button>
        <button
          className={styles.pagination_btn}
          onClick={() => {
            setSkip((prev) => prev + limit);
          }}
        >
          <ChevronRightIcon height={24} />
        </button>
      </div>
    </div>
  );
};
