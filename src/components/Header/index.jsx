import Link from "next/link";
import { classNames } from "../../utils/classnames";
import MediumIcon from "../icons/MediumIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Logo from "./Logo";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={classNames("container", styles.container)}>
          <Link href={"/"}>
            <a>
              <Logo className={styles.logo} />
            </a>
          </Link>

          <div className={styles.social}>
            <a
              href="https://twitter.com/neptunemutual"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon width={24} />
            </a>
            <a
              href="https://t.me/neptunemutualchat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon width={24} />
            </a>
            <a
              href="https://neptunemutual.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumIcon width={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
