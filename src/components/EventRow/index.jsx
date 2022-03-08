import DateLib from "../../../lib/date/DateLib";
import { classNames } from "../../utils/classnames";
import { formatCurrency } from "../../utils/formatter/currency";
import { fromNow } from "../../utils/formatter/relative-time";
import { BugReportModal } from "../BugReportModal";
import styles from "./styles.module.scss";

export function EventRow({ data }) {
  const { eventDate, action, story, point, url, underlying } = data;

  return (
    <tr className={classNames(styles.row, styles.fade_in)}>
      <td className={styles.time_cell}>
        <time
          dateTime={eventDate}
          title={DateLib.toLongDateFormat(new Date(eventDate))}
        >
          {fromNow(new Date(eventDate))}
        </time>
      </td>

      <td className={styles.action_cell}>
        <strong>{action}</strong> (<span>{story}</span>)
      </td>

      <td className={styles.view_cell}>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Tx
          </a>
        ) : (
          <BugReportModal underlying={underlying} />
        )}
      </td>

      <td className={styles.points_cell}>
        <div>+{formatCurrency(point, "", true).short}</div>
      </td>
    </tr>
  );
}
