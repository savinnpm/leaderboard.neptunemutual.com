import { SearchBox } from "../SearchBox";
import styles from "./styles.module.scss";

export const Pagination = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.wrapper}>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};
