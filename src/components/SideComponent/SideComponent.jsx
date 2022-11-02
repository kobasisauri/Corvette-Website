import LockSpin from "../UI/LockSpin";
import { ReactComponent as Speed } from "../../assets/speed.svg";

import { ReactComponent as Speedometer } from "../../assets/speedometer.svg";
import { ReactComponent as MileRange } from "../../assets/mile-range.svg";
import styles from "./SideComponent.module.scss";

const SideComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading1}>ALL YOU NEED</div>
      <div className={styles.heading2}>IS A NEW CORVETTE</div>
      <div className={styles["icons-wrapper"]}>
        <div className={styles["inner-wrapper"]}>
          <LockSpin className={styles.icon} icon={<Speedometer />} />
          <div className={styles.num}>2.9</div>
          <div className={styles.info}>0-60MPH</div>
        </div>
        <div className={styles["inner-wrapper"]}>
          <LockSpin className={styles.icon} icon={<Speed />} />
          <div className={styles.num}>+192</div>
          <div className={styles.info}>TOP SPEED</div>
        </div>
        <div className={styles["inner-wrapper"]}>
          <LockSpin className={styles.icon} icon={<MileRange />} />
          <div className={styles.num}>495</div>
          <div className={styles.info}>HORSEPOWER</div>
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
