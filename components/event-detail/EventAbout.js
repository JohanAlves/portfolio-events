import Link from "next/link";
import styles from "./EventAbout.module.css";
import ArrowLeftIicon from "../icons/ArrowLeftIicon";
import EventSummary from "./EventSummary";

function EventAbout(props) {
  const { title, description, date, time, location, city } = props;

  return (
    <div className={styles.aboutContainer}>
      <Link className={styles.backButton} href="/events">
        <ArrowLeftIicon />
        Back to Events
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <EventSummary date={date} time={time} location={location} city={city} />
      <p>{description}</p>
    </div>
  );
}

export default EventAbout;
