import { ArrowRightIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/classnames";
import styles from "./styles.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

export function AddressRowSkeleton() {
  const { width } = useWindowSize();

  return (
    <tr className={styles.row}>
      <td className={classNames(styles.rank_cell)}>
        <div className={classNames(styles.rank_cell_skel, styles.skeleton)}>
          &nbsp;
        </div>
      </td>

      <td className={styles.image_cell}>
        <div className={styles.image_wrapper_skel}>
          <div className={classNames(styles.image_cell_skel, styles.skeleton)}>
            &nbsp;
          </div>
        </div>
      </td>

      <td className={classNames(styles.name_cell, styles.name_cell_skel)}>
        <h3 className={classNames(styles.skeleton)}>&nbsp;</h3>
      </td>

      {width > 600 && ( // hide this on mobile view
        <td className={styles.address_cell}>
          <div
            className={classNames(styles.address_cell_skel, styles.skeleton)}
          >
            &nbsp;
          </div>
        </td>
      )}

      <td className={styles.points_cell}>
        <div className={classNames(styles.points_cell_skel, styles.skeleton)}>
          &nbsp;
        </div>
      </td>

      {width > 600 && ( // hide this on mobile view
        <td className={styles.action_cell}>
          <ArrowRightIcon height={18} fill="transparent" />
        </td>
      )}
    </tr>
  );
}
