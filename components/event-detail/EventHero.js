import Image from "next/image";
import styles from "./EventHero.module.css";

function EventHero(props) {
  const { image, imageAlt } = props;
  const imageURL = "/" + image;

  return (
    <>
      <div className={styles.background}>
        <Image width={100} height={100} src={imageURL} alt={imageAlt} />
      </div>
      <div className={styles.featuredImage}>
        <Image width={1200} height={800} src={imageURL} alt={imageAlt} />
      </div>
    </>
  );
}

export default EventHero;
