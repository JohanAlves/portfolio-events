import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import styles from "./EventTickets.module.css";
import Button from "../ui/Button";
import { useState } from "react";

function EventTickets(props) {
  const { tickets } = props;
  const InitialState = createInitialState();
  const [ticketState, setTicketState] = useState(InitialState);
  const [subTotal, setSubTotal] = useState(0);

  function createInitialState() {
    let initialState = [];
    tickets.map((ticket) => {
      return initialState.push({
        id: ticket.id,
        title: ticket.title,
        price: ticket.price,
        qty: 0,
      });
    });
    return initialState;
  }

  function handleTicketCount(id, action) {
    const ticketById = ticketState.find((ticket) => ticket.id === id);

    if (action === "decrement" && ticketById.qty <= 0) return;

    if (action === "increment") {
      ticketById.qty++;
    } else if (action === "decrement") {
      ticketById.qty--;
    }
    setTicketState((state) =>
      state.map((item) => (item.id === id ? ticketById : item))
    );
    updateSubTotal();
  }

  function updateSubTotal() {
    let subTotalCalc = 0;
    ticketState.map((ticket) => {
      subTotalCalc += ticket.qty * ticket.price;
    });
    setSubTotal(subTotalCalc);
  }

  function getTicketCount(id) {
    return ticketState.find((ticket) => ticket.id === id).qty;
  }

  if (!ticketState) return <p>loading</p>;

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.tickets}>
        {tickets.map((ticket) => {
          const ticketCount = getTicketCount(ticket.id);

          return (
            <div className={styles.ticket} key={ticket.id}>
              <div className={styles.ticketInfo}>
                <span className={styles.ticketType}>{ticket.title}</span>
                <span className={styles.ticketPrice}>${ticket.price}</span>
              </div>
              <div className={styles.ticketCount}>
                <div
                  className={
                    ticketCount > 0 ? styles.minus : styles.minusDisabled
                  }
                  onClick={handleTicketCount.bind(this, ticket.id, "decrement")}
                >
                  <MinusIcon />
                </div>
                <span className={styles.count}>{ticketCount}</span>
                <div
                  className={styles.plus}
                  onClick={handleTicketCount.bind(this, ticket.id, "increment")}
                >
                  <PlusIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.subtotalContainer}>
        <h4>Subtotal</h4>
        <span>${subTotal.toFixed(2)}</span>
      </div>
      <Button>BUY NOW</Button>
    </div>
  );
}

export default EventTickets;
