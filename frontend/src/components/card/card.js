import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card1 = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>judul</span>
        <span className={styles.number}>number</span>
        <span className={styles.detail}>detail</span>
      </div>
    </div>
  );
};

export default Card1;
