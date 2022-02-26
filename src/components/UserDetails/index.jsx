import { useRouter } from "next/router";
import { getAvatarSvg } from "../../utils/avatar";
import styles from "./styles.module.scss";

export const UserDetails = ({ data, rank }) => {
  const { query } = useRouter();

  const { name, address } = data;

  return (
    <div className={styles.wrapper}>
      {/* Avatar */}
      <div
        className={styles.image_wrapper}
        dangerouslySetInnerHTML={{
          __html: getAvatarSvg(address || query.address),
        }}
      ></div>

      {/* Data */}
      <div className={styles.data_wrapper}>
        {/* Name */}
        <h1>{name || "\xA0"}</h1>

        {/* Rank */}
        <div className={styles.rank_wrapper}>
          <div className={styles.rank_title}>Rank</div>
          <div className={styles.rank_content}>{rank}</div>
          {rank === 1 && <img src="/images/ranks/rank1.svg" alt="" />}
          {rank === 2 && <img src="/images/ranks/rank2.svg" alt="" />}
          {rank === 3 && <img src="/images/ranks/rank3.svg" alt="" />}
        </div>
      </div>
    </div>
  );
};
