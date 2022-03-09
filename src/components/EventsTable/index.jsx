import { EventRow } from "../EventRow";
import { Pagination } from "../Pagination";
import styles from "./styles.module.scss";
import { EventRowSkeleton } from "../EventRow/skeleton";
import { NoData } from "../NoData";
import useWindowSize from "../../hooks/useWindowSize";

export const EventsTable = ({
  data,
  skip,
  setSkip,
  limit,
  setLimit,
  records,
  loading,
}) => {
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      <div className={styles.table_wrapper}>
        <table className="table">
          <thead className="thead">
            <tr>
              <th className={styles.time_head_cell}>Time</th>
              <th className={styles.action_head_cell}>Action</th>
              <th className={styles.view_head_cell}>View</th>
              {width >= 1200 && ( // will display only on desktop view
                <th className={styles.points_head_cell}>Points</th>
              )}
            </tr>
          </thead>

          <tbody>
            {!loading ? (
              data.length ? (
                data.map((x, idx) => (
                  <EventRow key={x._id} data={x} index={idx + skip} />
                ))
              ) : (
                <NoData />
              )
            ) : (
              Array(limit)
                .fill(0)
                .map((_, i) => <EventRowSkeleton key={i} />)
            )}
          </tbody>
        </table>

        <Pagination
          noSearch
          skip={skip}
          setSkip={setSkip}
          limit={limit}
          setLimit={setLimit}
          records={records}
        />
      </div>
    </div>
  );
};
