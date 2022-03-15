import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import styles from "./styles.module.scss";
import DateLib from "../../../lib/date/DateLib";

export function BugReportModal({ underlying }) {
  const [isOpen, setIsOpen] = useState(false);
  const responseStringSplit =
    underlying.response && underlying.response.split(".");
  const firstResponseSentenceSplit =
    responseStringSplit && responseStringSplit.shift();
  const restResponseSentenceSplit =
    responseStringSplit && responseStringSplit.join(".").trim();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type="button" onClick={openModal}>
          Bug Report
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={styles.dialog} onClose={closeModal}>
          <div className={styles.dialog_content}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className={styles.dialog_overlay} />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className={styles.trick} aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={styles.modal_wrapper}>
                {/* Header with close */}
                <div className={styles.modal_header}>
                  <p>Bug Report #{underlying.id}</p>
                  <button type="button" onClick={closeModal}>
                    <XIcon width={18} height={18} />
                  </button>
                </div>

                {/* Content Container */}
                <div className={styles.modal_content}>
                  {underlying.accepted && (
                    <h4 className={styles.modal_status}>Accepted</h4>
                  )}
                  {/* Title */}
                  <Dialog.Title as="h3" className={styles.modal_title}>
                    {underlying.title}
                  </Dialog.Title>
                  <p className={styles.modal_subtitle}>
                    Reported On:{" "}
                    {DateLib.toLongDateFormat(
                      Math.floor(parseInt(underlying.createdAt, 10) / 1000),
                      "UTC"
                    )}
                  </p>

                  <div className={styles.modal_description}>
                    {underlying.description}
                  </div>

                  {underlying.response && (
                    <div className={styles.modal_response}>
                      <h3>Team Response</h3>
                      <p>{firstResponseSentenceSplit}.</p>
                      <p>{restResponseSentenceSplit}</p>
                    </div>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
