import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { SearchBox } from "../SearchBox";
import styles from "./styles.module.scss";

export const Pagination = ({
  noSearch,
  searchTerm,
  setSearchTerm,
  skip,
  setSkip,
  limit,
  setLimit,
  records,
}) => {
  const page = skip / limit + 1;
  const from = skip + 1;
  const to = skip + limit;
  const actualTo = Math.min(to, records);

  const isLastPage = to >= records;
  const isFirstPage = skip - limit < 0;

  const handlePageChange = (ev) => {
    const newPage = ev.target.value;

    if (newPage && newPage > 0) {
      setSkip((newPage - 1) * limit);
    }
  };

  return (
    <div className={styles.wrapper}>
      {noSearch ? (
        <div></div>
      ) : (
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}

      <div className={styles.pagination_nav}>
        <input
          type="number"
          name="page"
          id="page"
          value={page}
          onChange={handlePageChange}
        />

        <p>
          {from}-{actualTo} of {records}
        </p>

        <button
          className={styles.pagination_btn}
          onClick={() => {
            setSkip((prev) => prev - limit);
          }}
          disabled={isFirstPage}
        >
          <ChevronLeftIcon height={24} />
        </button>
        <button
          className={styles.pagination_btn}
          onClick={() => {
            setSkip((prev) => prev + limit);
          }}
          disabled={isLastPage}
        >
          <ChevronRightIcon height={24} />
        </button>
      </div>
    </div>
  );
};
