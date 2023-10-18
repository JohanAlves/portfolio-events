import styles from "./EventSummary.module.css";
import AdressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";

function EventSummary(props) {
  const { date, time, location, city } = props;

  return (
    <div className={styles.summary}>
      <div className={styles.summaryCard}>
        <DateIcon />
        <div className={styles.cardContent}>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
      <div className={styles.summaryCard}>
        <AdressIcon />
        <div className={styles.cardContent}>
          <span>{city}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default EventSummary;
