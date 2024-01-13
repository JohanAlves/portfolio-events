import Link from "next/link";
import styles from "./EventItem.module.css";
import AddressIcon from "../icons/AddressIcon";
import Image from "next/image";

function EventItem(props) {
  const { title, image, date, location, city, id } = props;
  const [day, month, year] = date.split(" ");
  const exploreLink = `/events/${id}`;

  return (
    <div className={styles.cardWrapper}>
      <Link className={styles.item} href={exploreLink}>
        <Image width={365} height={200} src={"/" + image} alt={title} />
        <div className={styles.contentWrapper}>
          <div className={styles.date}>
            <span className={styles.day}>
              {day.length === 1 ? "0" + day : day}
            </span>
            <div className={styles.dateBar}>
              <span className={styles.month}>{month}</span>
              <span className={styles.year}>{year}</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.city}>
              <AddressIcon />
              <span>{city}</span>
            </div>
            <h2>{title}</h2>
            <span className={styles.location}>{location}</span>
          </div>
        </div>
      </Link>
      <div className={styles.shadow}></div>
    </div>
  );
}

export default EventItem;
