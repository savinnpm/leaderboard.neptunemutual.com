import styles from "./styles.module.scss";

export const AddressTitleBar = ({ address, points }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>{address}</h3>

        <div className={styles.points_wrapper}>
          <p>
            {points} <span className="sr-only">points</span>
          </p>
          <img src="/images/points.svg" alt="points" />
        </div>
      </div>
    </div>
  );
};
