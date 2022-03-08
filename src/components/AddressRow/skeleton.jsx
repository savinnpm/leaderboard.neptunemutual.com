import { ArrowRightIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/classnames";
import styles from "./styles.module.scss";

export function AddressRowSkeleton() {
  return (
    <tr className={styles.row}>
      <td className={classNames(styles.rank_cell)}>
        <span
          className={classNames(styles.rank_content_skel, styles.skeleton)}
        ></span>
      </td>

      <td className={styles.image_cell}>
        <div
          className={classNames(styles.image_cell_content, styles.skeleton)}
        ></div>
      </td>

      <td className={classNames(styles.name_cell, styles.name_cell_skel)}>
        <h3 className={classNames(styles.skeleton)}>.</h3>
      </td>

      <td className={styles.address_cell}>
        <span className={classNames(styles.address_cell_skel, styles.skeleton)}>
          0xbfc6129b6191f757fe334e1fd07d56b3cb57062e
        </span>
      </td>

      <td className={styles.points_cell}>
        <span className={classNames(styles.points_cell_skel, styles.skeleton)}>
          180
        </span>
      </td>

      <td className={styles.arrow_skel}>
        <ArrowRightIcon height={18} />
      </td>
    </tr>
  );
}
