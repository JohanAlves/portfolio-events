import styles from "./EventList.module.css";
import EventItem from "./EventItem";

function EventList(props) {
  const { items } = props;

  return (
    <div className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
}

export default EventList;
