import { classNames } from "../../utils/classnames";
import styles from "./styles.module.scss";

export const BurgerComponent = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={classNames(styles.wrapper, isOpen && styles.active)}
      aria-label="Open or Close the Sidebar"
    >
      <div className={classNames(styles.bar)}></div>
      <div className={classNames(styles.bar)}></div>
      <div className={classNames(styles.bar)}></div>
    </button>
  );
};
