import EventAbout from "./EventAbout";
import styles from "./EventContent.module.css";
import EventTickets from "./EventTickets";

function EventContent(props) {
  const { tickets } = props;

  return (
    <div className={styles.content}>
      <EventAbout {...props} />
      <div>
        <EventTickets tickets={tickets} />
      </div>
    </div>
  );
}

export default EventContent;
