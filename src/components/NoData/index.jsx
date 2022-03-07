// import { classNames } from "../../utils/classnames";
import styles from "./styles.module.scss";

export function NoData() {
  return (
    <tr>
      <td className={styles.no_data_td} colSpan={5}>
        No Data to show
      </td>
    </tr>
  );
}
