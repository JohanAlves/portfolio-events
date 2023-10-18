import Link from "next/link";
import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link href="/" className={styles.logo}>
            <img src="/images/events-logo.png" alt="" />
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/events">All Events</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
