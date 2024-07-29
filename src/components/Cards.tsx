import { CardDets } from "@/app/dashboard/page";
import styles from "@/styles/Cards.module.css";

const Card = ({ icon, name, msg, value, color }: CardDets) => {
  return (
    <>
      <div className={`card ${styles["card-wrapper"]}`}>
        <div className={styles["inner-wrapper"]}>
          <div>
            <div 
            className={`card-icon ${styles["card-icon"]}`}
            style={{backgroundColor:`${color}`}}
            >{icon}</div>
          </div>
          <div className={styles.info}>
            <p className={styles['info-name']}>{name}</p>
            <p className={styles['info-value']}>{value}</p>
          </div>
        </div>
        <div>
          <p>{msg}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
