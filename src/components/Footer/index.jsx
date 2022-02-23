import { useEffect, useState } from "react";
import { classNames } from "../../utils/classnames";
import { CheckIcon } from "@heroicons/react/outline";
import CopyIcon from "../icons/CopyIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import styles from "./styles.module.scss";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  const text = `Neptune Mutual Leaderboard`;

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  const copyAddress = () => {
    try {
      navigator.clipboard.writeText(url);
    } catch (error) {
      console.log("Cannot copy");
    }
    setCopied(true);
  };

  return (
    <footer>
      <div className={classNames("container", styles.footer)}>
        <div></div>

        <p className={styles.credits_wrapper}>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Credits
          </a>
        </p>

        <div className={styles.share_wrapper}>
          <h5>Share this page</h5>

          <p className={styles.share_links}>
            <a
              href={`https://twitter.com/share?url=${encodeURIComponent(
                url
              )}&text=${encodeURIComponent(text)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon height={18} />
            </a>
            <a
              href={`https://telegram.me/share/?url=${encodeURIComponent(
                url
              )}&text=${encodeURIComponent(text)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Telegram</span>
              <TelegramIcon height={18} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}&quote=${encodeURIComponent(text)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon height={18} />
            </a>
            <a
              href={`https://web.whatsapp.com/send?text=${encodeURIComponent(
                text
              )}%3A%3A%20${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">WhatsApp</span>
              <WhatsAppIcon height={18} />
            </a>
            <button onClick={copyAddress}>
              <span className="sr-only">{copied ? "Copied" : "Copy"} URL</span>
              {copied ? (
                <CheckIcon height={18} color="rgb(52, 211, 153)" />
              ) : (
                <CopyIcon height={18} />
              )}
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};
