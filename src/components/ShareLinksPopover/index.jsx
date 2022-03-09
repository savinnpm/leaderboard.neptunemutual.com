import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import CopyIcon from "../icons/CopyIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import ShareIcon from "../icons/ShareIcon";
import styles from "./styles.module.scss";

export const ShareLinksPopover = ({ url, text, copied, copyAddress }) => {
  return (
    <div>
      <Popover className={styles.popover}>
        <Popover.Button>
          <ShareIcon />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className={styles.popover_panel}>
            <div className={styles.popover_content}>
              <h5>Share this page</h5>
              <div className={styles.popover_share_links}>
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
                  <span className="sr-only">
                    {copied ? "Copied" : "Copy"} URL
                  </span>
                  {copied ? (
                    <CheckIcon height={18} color="rgb(52, 211, 153)" />
                  ) : (
                    <CopyIcon height={18} />
                  )}
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
