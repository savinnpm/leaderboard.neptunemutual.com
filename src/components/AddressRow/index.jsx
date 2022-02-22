import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { getAvatarSvg } from "../../utils/avatar";
import { classNames } from "../../utils/classnames";
import styles from "./styles.module.scss";

export function AddressRow({ data, index }) {
  const { address, name, totalPoints } = data;

  return (
    <tr className={styles.row}>
      <td>
        <div>{index + 1}</div>
      </td>

      <td className={styles.image_cell}>
        <div className={styles.image_cell_content}>
          <div
            className={styles.image_wrapper}
            dangerouslySetInnerHTML={{ __html: getAvatarSvg(address) }}
          ></div>
        </div>
      </td>

      <td
        className={classNames(styles.name_cell, styles[`name_cell_${index}`])}
      >
        <h3 className={""}>{name}</h3>
      </td>

      <td className={styles.address_cell}>{address}</td>

      <td className={styles.points_cell}>
        <div>{totalPoints}</div>
      </td>

      <td>
        <Link href={"/addres"}>
          <a className={styles.link}>
            <ArrowRightIcon width={12} />
          </a>
        </Link>
      </td>
    </tr>
  );
}
