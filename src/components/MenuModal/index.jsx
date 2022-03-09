import { Dialog, Transition } from "@headlessui/react";
import { BurgerComponent } from "../BurgerComponent";
import { MobileMenu } from "../MobileMenu";
import styles from "./styles.module.scss";
import { Fragment } from "react";

export const MenuModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          open={isOpen}
          onClose={onClose}
          className={styles.dialog}
        >
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
                <div className={styles.burger_wrapper}>
                  <BurgerComponent isOpen={true} onToggle={onClose} />
                </div>
                <div className={styles.mobile_menu_wrapper}>
                  <MobileMenu />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
