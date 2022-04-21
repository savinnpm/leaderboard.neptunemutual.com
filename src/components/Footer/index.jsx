import { useEffect, useState } from "react";
import { classNames } from "../../utils/classnames";
import { CheckIcon } from "@heroicons/react/outline";
import CopyIcon from "../icons/CopyIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import styles from "./styles.module.scss";
import { SearchBox } from "../SearchBox";
import { ShareLinksPopover } from "../ShareLinksPopover";

const leaderTexts = [
  `Neptune Mutual just launched their protocol testnet! I've been having fun and getting points trying out their platform.\n\nCheck out the latest rankings on their Hall of Fame leaderboard:\n<URL>\n\n#neptunemutual #testnet #cover #defi`,
  `Who knew you could playtest a DeFi protocol? Join me as one of the first to experience Neptune Mutual’s parametric cover platform.\n\nClimb their leaderboard ranks with every test you make:\n<URL>\n\n#neptunemutual #testnet #cover #defi`,
  `Have fun and test Neptune Mutual’s latest public testnet with me. Every test you make only gets more and more rewarding.\n\nSee their Hall of Fame leaderboard rankings live:\n<URL>\n\n#neptunemutual #testnet #cover #defi`,
];
const profileTexts = [
  `Testing my way to the top! I’ve gained <POINT> points so far since I’ve been using Neptune Mutual’s testnet.\n\nJoin me and check out my progress:\n<URL>\n\n#neptunemutual #testnet #cover #defi`,
  `I’ve racked up <POINT> points on Neptune Mutual’s protocol testnet. This has got to be my most unique testnet experience ever!\n\nTake a look at my recent activity:\n<URL>\n\n#neptunemutual #testnet #cover #defi`,
  `Be one of the first to try out Neptune Mutual! I’ve made <POINT> points so far completing tasks on their public testnet.\n\nTake a look at my progress:\n<URL>\n\n#neptunemutual #testnet #cover #defi`,
];

export const Footer = ({ page, points, searchTerm, setSearchTerm }) => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");

  const getText = () => {
    let randomIndex, randomText, replaceUrl;
    if (typeof window !== "undefined") {
      if (page === "leaderboard") {
        randomIndex = Math.floor(Math.random() * leaderTexts.length);
        randomText = leaderTexts[randomIndex];
        replaceUrl = window.location.origin;
      } else if (page === "profile") {
        randomIndex = Math.floor(Math.random() * profileTexts.length);
        randomText = profileTexts[randomIndex];
        replaceUrl = window.location.href;
      }
      randomText = randomText.replace("<URL>", replaceUrl);
      randomText = randomText.replace("<POINT>", points);
    }
    return randomText;
  };

  useEffect(() => {
    setUrl(window.location.origin);
    setText(getText());
  }, [points]);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  const copyAddress = () => {
    try {
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl);
    } catch (error) {
      console.log("Cannot copy");
    }
    setCopied(true);
  };

  return (
    <footer>
      <div className={classNames("container", styles.footer)}>
        <p className={styles.credits_wrapper}>
          <a
            href="https://avatars.dicebear.com/styles/micah"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.link_ul}
          >
            {'"Micah"'}
          </a>
          <span>by Micah Lanier is licensed under</span>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.link_ul}
          >
            CC BY 4.0
          </a>
        </p>

        <div className={styles.share_wrapper}>
          <h5>Share this page</h5>

          <p className={styles.share_links}>
            <a
              href={`https://twitter.com/share?text=${encodeURIComponent(
                text
              )}`}
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
              )}`}
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
      <div className={styles.footer_mobile}>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ShareLinksPopover
          url={url}
          text={text}
          copied={copied}
          copyAddress={copyAddress}
        />
      </div>
    </footer>
  );
};
