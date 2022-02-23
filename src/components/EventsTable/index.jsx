import { EventRow } from "../EventRow";
import { Pagination } from "../Pagination";
import styles from "./styles.module.scss";

export const EventsTable = ({
  data,
  searchTerm,
  setSearchTerm,
  skip,
  setSkip,
  limit,
  setLimit,
  records,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.table_wrapper}>
        <table className="table">
          <thead className="thead">
            <tr>
              <th className={styles.time_head_cell}>Time</th>
              <th className={styles.action_head_cell}>Action</th>
              <th className={styles.view_head_cell}>View</th>
              <th className={styles.points_head_cell}>Points</th>
            </tr>
          </thead>

          <tbody>
            {data.map((x, idx) => (
              <EventRow key={x._id} data={x} index={idx + skip} />
            ))}
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
