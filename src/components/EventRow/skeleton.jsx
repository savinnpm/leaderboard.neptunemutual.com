import { classNames } from "../../utils/classnames";
import styles from "./styles.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

export function EventRowSkeleton() {
  const { width } = useWindowSize();

  return (
    <tr className={styles.row}>
      <td className={styles.time_cell}>
        <span className={classNames(styles.time_cell_skel, styles.skeleton)}>
          &nbsp;
        </span>
      </td>

      <td className={styles.action_cell}>
        <span className={classNames(styles.action_cell_skel, styles.skeleton)}>
          &nbsp;
        </span>
      </td>

      <td className={styles.view_cell}>
        <span className={classNames(styles.view_cell_skel, styles.skeleton)}>
          &nbsp;
        </span>
      </td>

      {width >= 1200 && (
        <td className={styles.points_cell}>
          <span
            className={classNames(styles.points_cell_skel, styles.skeleton)}
          >
            &nbsp;
          </span>
        </td>
      )}
    </tr>
  );
}
