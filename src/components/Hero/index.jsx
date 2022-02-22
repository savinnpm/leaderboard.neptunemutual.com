import { classNames } from "../../utils/classnames";
import { formatCurrency } from "../../utils/formatter/currency";
import LeaderboardGraphic from "./LeaderboardGraphic";
import styles from "./styles.module.scss";

export const Hero = ({ pointsEarned, totalUsers }) => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames("container", styles.container)}>
        <div className={styles.title_container}>
          <div className={styles.graphic_container}>
            <LeaderboardGraphic height={80} />
          </div>
          <h1>Leaderboard</h1>
        </div>

        <div className={styles.stats}>
          <div>
            <h3>POINTS EARNED</h3>
            <p>{formatCurrency(pointsEarned, "").short}</p>
          </div>

          <div>
            <h3>TOTAL USERS</h3>
            <p>{formatCurrency(totalUsers, "").short}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
