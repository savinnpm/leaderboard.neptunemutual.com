import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { isZeroAddress } from "../../utils/address";
import { getAvatarSvg } from "../../utils/avatar";
import { classNames } from "../../utils/classnames";
import { formatCurrency } from "../../utils/formatter/currency";
import styles from "./styles.module.scss";
import { truncateString } from "../../utils/truncate";
import useWindowSize from "../../hooks/useWindowSize";

export function AddressRow({ data, index }) {
  const { width } = useWindowSize();
  const { rank, address, name, totalPoints } = data;

  function renderTruncatedLength() {
    if (width <= 1200) {
      // will truncate only for mobile and tablet
      return 8;
    }

    return 50;
  }

  function renderTruncatedPosition() {
    if (width <= 600) {
      return true;
    }

    return false;
  }

  return (
    <tr className={classNames(styles.row, styles.fade_in)}>
      <td className={styles.rank_cell}>
        <div className={styles.rank_content}>
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
        {width <= 600 && ( // display this on mobile view
          <span className={styles.truncated_string_mobile}>
            {truncateString(
              address,
              renderTruncatedLength(),
              renderTruncatedPosition()
            )}
          </span>
        )}
      </td>

      {width > 600 && ( // hide this on mobile view
        <td className={styles.address_cell}>
          {truncateString(
            address,
            renderTruncatedLength(),
            renderTruncatedPosition()
          )}
        </td>
      )}

      <td
        className={classNames(
          styles.points_cell,
          styles[`points_cell_${index}`]
        )}
      >
        <div>{formatCurrency(totalPoints, "", true).short}</div>
      </td>

      <td className={styles.action_cell}>
        {!isZeroAddress(address) && (
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
