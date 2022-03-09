import DateLib from "../../../lib/date/DateLib";
import { classNames } from "../../utils/classnames";
import { formatCurrency } from "../../utils/formatter/currency";
import { fromNow } from "../../utils/formatter/relative-time";
import { BugReportModal } from "../BugReportModal";
import styles from "./styles.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

export function EventRow({ data }) {
  const { width } = useWindowSize();
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
        <span className={styles.action}>
          <strong>{action}</strong>
        </span>
        <span>{` (${story})`}</span>
        {width < 1200 && ( // will display on mobile and tablet view
          <span className={styles.action_points}>{`+${
            formatCurrency(point, "", true).short
          } Points`}</span>
        )}
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

      {width >= 1200 && ( // will display only on desktop view
        <td className={styles.points_cell}>
          <div>+{formatCurrency(point, "", true).short}</div>
        </td>
      )}
    </tr>
  );
}
