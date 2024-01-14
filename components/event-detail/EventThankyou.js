import Button from "../ui/Button";
import styles from "./EventThankyou.module.css";

function EventThankyou(props) {
  const { setThankyouIsOpen } = props;
  const { ticketState } = props;
  const { subTotal } = props;

  console.log(ticketState);

  function closeThankyou() {
    setThankyouIsOpen(false);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.thankyouContainer}>
        <h2 className={styles.msgTitle}>Your seats are booked!</h2>
        <table className={styles.ticketsInvoice}>
          <th>Description</th>
          <th>Value</th>
          {ticketState.map((ticket) => {
            if (ticket.qty !== 0) {
              const ticketPrice = ticket.price * ticket.qty;
              return (
                <tr>
                  <td>
                    {ticket.qty}x {ticket.title}
                  </td>
                  <td>{ticketPrice.toFixed(2)}</td>
                </tr>
              );
            }
          })}
          <tr>
            <td className={styles.invoiceSubtotalDesc}>Subtotal</td>
            <td className={styles.invoiceSubtotalValue}>
              {subTotal.toFixed(2)}
            </td>
          </tr>
        </table>
        <p className={styles.thankMsg}>
          Thanks for buying with us! Don't forget to save the date:
        </p>
        <div className={styles.eventMeta}>
          <h3 className={styles.eventName}>Eletric Nights</h3>
          <div className={styles.date}>
            <span>18 Jan 2024</span>
            <span>20:00</span>
          </div>
          <div className={styles.address}>
            <span>New York - NY</span>
            <span>Austin Night Club</span>
          </div>
        </div>

        <Button onClick={closeThankyou}>Close Invoice</Button>
      </div>
    </div>
  );
}

export default EventThankyou;
