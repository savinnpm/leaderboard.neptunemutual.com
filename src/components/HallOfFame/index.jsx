import { AddressRow } from "../AddressRow";
import { SearchBox } from "../SearchBox";
import styles from "./styles.module.scss";

export const HallOfFame = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.title}>Hall of Fame</h2>

        <div className={styles.table_wrapper}>
          <table className="table">
            <thead></thead>

            <tbody>
              {data.map((x, idx) => (
                <AddressRow key={x.address} data={x} index={idx} />
              ))}
            </tbody>
          </table>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};
