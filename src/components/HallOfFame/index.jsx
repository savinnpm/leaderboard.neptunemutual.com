import { BUG_REPORT_URL } from "../../config";
import { AddressRowSkeleton } from "../AddressRow/skeleton";
import { AddressRow } from "../AddressRow";
import { Pagination } from "../Pagination";
import styles from "./styles.module.scss";
import { NoData } from "../NoData";
import useWindowSize from "../../hooks/useWindowSize";

export const HallOfFame = ({
  data,
  searchTerm,
  setSearchTerm,
  skip,
  setSkip,
  limit,
  setLimit,
  totalUsers,
  loading,
}) => {
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.title_container}>
          <h2>Hall of Fame</h2>
          <a href={BUG_REPORT_URL} target="_blank" rel="noopener noreferrer">
            SUBMIT BUG REPORT
          </a>
        </div>

        <div className={styles.table_wrapper}>
          <table className="table">
            <thead className="thead">
              <tr>
                <th className={styles.rank_head_cell}>Rank</th>
                <th className={styles.image_head_cell}>&nbsp;</th>
                <th className={styles.name_head_cell}>Moniker</th>
                {width > 600 && ( // will display only on tablet and desktop
                  <th className={styles.address_head_cell}>Wallet Address</th>
                )}
                <th className={styles.points_head_cell}>Points</th>
                {width > 600 && ( // will display only on tablet and desktop
                  <th className={styles.action_head_cell}></th>
                )}
              </tr>
            </thead>

            <tbody>
              {!loading ? (
                data.length ? (
                  data.map((x, idx) => (
                    <AddressRow key={idx} data={x} index={idx + skip} />
                  ))
                ) : (
                  <NoData />
                )
              ) : (
                Array(limit)
                  .fill(0)
                  .map((_, i) => <AddressRowSkeleton key={i} />)
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          noSearch={width < 1200 ? true : false} // for tablet and mobile view, remove search component
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          skip={skip}
          setSkip={setSkip}
          limit={limit}
          setLimit={setLimit}
          records={totalUsers}
        />
      </div>
    </div>
  );
};
