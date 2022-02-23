import styles from "./styles.module.scss";
import { ChevronLeftIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <button className={styles.button} onClick={() => router.back()}>
          <ChevronLeftIcon width={16} />
          Back
        </button>
      </div>
    </div>
  );
};
