import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { getAvatarSvg } from "../../utils/avatar";
import { classNames } from "../../utils/classnames";
import { formatCurrency } from "../../utils/formatter/currency";
import styles from "./styles.module.scss";

export function AddressRow({ data, index }) {
  const { rank, address, name, totalPoints } = data;

  return (
    <tr className={styles.row}>
      <td className={styles.rank_cell}>
        <div className={styles.rank_content}>
          <span className="sr-only">Rank</span>
          <span className={classNames(rank === 1 && styles.first)}>{rank}</span>
          {rank === 1 && (
            <img src="/images/ranks/rank1.svg" alt="" width={"39px"} />
          )}
          {rank === 2 && (
            <img src="/images/ranks/rank2.svg" alt="" width={"31px"} />
          )}
          {rank === 3 && (
            <img src="/images/ranks/rank3.svg" alt="" width={"31px"} />
          )}
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
        <div>{formatCurrency(totalPoints, "", true).short}</div>
      </td>

      <td>
        {address !== "0x0000000000000000000000000000000000000000" && (
          <Link href={`/${address}`}>
            <a className={styles.link}>
              <ArrowRightIcon height={18} />
            </a>
          </Link>
        )}
      </td>
    </tr>
  );
}
