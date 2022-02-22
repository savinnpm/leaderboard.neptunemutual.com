import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { getAvatarSvg } from "../../utils/avatar";
import { classNames } from "../../utils/classnames";
import { formatCurrency } from "../../utils/formatter/currency";
import styles from "./styles.module.scss";

export function AddressRow({ data, index }) {
  const { address, name, totalPoints } = data;

  return (
    <tr className={styles.row}>
      <td className={styles.rank_cell}>
        <div className={styles.rank_content}>
          <span className={classNames(index === 0 && styles.first)}>
            {index + 1}
          </span>
          {index === 0 && <img src="/images/ranks/rank1.svg" width={"39px"} />}
          {index === 1 && <img src="/images/ranks/rank2.svg" width={"31px"} />}
          {index === 2 && <img src="/images/ranks/rank3.svg" width={"31px"} />}
        </div>
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
        <div>{formatCurrency(totalPoints, "").short}</div>
      </td>

      <td>
        <Link href={"/addres"}>
          <a className={styles.link}>
            <ArrowRightIcon height={18} />
          </a>
        </Link>
      </td>
    </tr>
  );
}
