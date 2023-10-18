import Link from "next/link";

import styles from "./Button.module.css";

function Button(props) {
  if (props.href) {
    return (
      <Link className={styles.btn} href={props.href}>
        {props.children}
      </Link>
    );
  }
  return (
    <button onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
}

export default Button;
