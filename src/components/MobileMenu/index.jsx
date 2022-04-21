import styles from "./styles.module.scss";
import MediumIcon from "../icons/MediumIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import { BUG_REPORT_URL } from "../../config";

export const MobileMenu = () => {
  return (
    <div className={styles.mobile_menu}>
      <div className={styles.menu_item}>
        <h1>Menu</h1>
      </div>
      <div className={styles.menu_item}>
        <a
          href={BUG_REPORT_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Submit Bug Report"
        >
          Submit Bug Report
        </a>
      </div>
      <div className={styles.menu_item}>
        <h1>Follow Us</h1>
      </div>
      <div className={styles.menu_item}>
        <div className={styles.social}>
          <a
            href="https://twitter.com/neptunemutual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon width={35} />
          </a>
          <a
            href="https://t.me/neptunemutualchat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon width={35} />
          </a>
          <a
            href="https://neptunemutual.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumIcon width={35} />
          </a>
        </div>
      </div>
    </div>
  );
};
