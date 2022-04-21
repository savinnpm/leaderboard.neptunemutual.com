import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { SearchBox } from "../SearchBox";
import styles from "./styles.module.scss";

import { useRouter } from "next/router";

export const Pagination = ({
  noSearch,
  searchTerm,
  setSearchTerm,
  skip,
  setSkip,
  limit,
  setLimit: _setLimit,
  records,
}) => {
  const page = skip ? skip / limit + 1 : 1;
  const from = skip ? skip + 1 : records ? 1 : 0;
  const to = skip ? skip + limit : limit;
  const actualTo = Math.min(to, records);

  const isLastPage = to >= records;
  const isFirstPage = skip === 0;

  const router = useRouter();

  const handlePageChange = (ev) => {
    const newPage = ev.target.value;

    if (newPage && newPage > 0) {
      if ((isFirstPage && newPage < page) || (isLastPage && newPage > page))
        return;
      router.push({
        pathname: router.asPath.split("?")[0],
        query: { skip: (newPage - 1) * limit, limit: limit },
      });
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
        <p>Page</p>
        <input
          type="number"
          name="page"
          id="page"
          value={page}
          onChange={handlePageChange}
        />

        <p className={styles.pagination_from_to}>
          {from}-{actualTo} of {records}
        </p>

        <button
          className={styles.pagination_btn}
          onClick={() => {
            router.push({
              pathname: router.asPath.split("?")[0],
              query: { skip: skip - limit, limit: limit },
            });
          }}
          disabled={isFirstPage}
        >
          <ChevronLeftIcon height={24} />
        </button>
        <button
          className={styles.pagination_btn}
          onClick={() => {
            router.push({
              pathname: router.asPath.split("?")[0],
              query: { skip: skip + limit, limit: limit },
            });
          }}
          disabled={isLastPage}
        >
          <ChevronRightIcon height={24} />
        </button>
      </div>
    </div>
  );
};
