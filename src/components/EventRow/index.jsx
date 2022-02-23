import DateLib from "../../../lib/date/DateLib";
import { formatCurrency } from "../../utils/formatter/currency";
import { fromNow } from "../../utils/formatter/relative-time";
import { BugReportModal } from "../BugReportModal";
import styles from "./styles.module.scss";

export function EventRow({ data }) {
  const { eventDate, action, story, point, url } = data;

  return (
    <tr className={styles.row}>
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
          <BugReportModal />
        )}
      </td>

      <td className={styles.points_cell}>
        <div>+{formatCurrency(point, "").short}</div>
      </td>
    </tr>
  );
}
