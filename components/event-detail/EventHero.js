import styles from "./EventHero.module.css";

function EventHero(props) {
  const { image, imageAlt } = props;
  const imageURL = "/" + image;

  return (
    <>
      <div className={styles.background}>
        <img src={imageURL} alt={imageAlt} />
      </div>
      <div className={styles.featuredImage}>
        <img src={imageURL} alt={imageAlt} />
      </div>
    </>
  );
}

export default EventHero;
