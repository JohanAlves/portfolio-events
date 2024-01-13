import { useState } from "react";
import EventAbout from "./EventAbout";
import styles from "./EventContent.module.css";
import EventThankyou from "./EventThankyou";
import EventTickets from "./EventTickets";

function EventContent(props) {
  const { tickets } = props;
  const [thankyouIsOpen, setThankyouIsOpen] = useState(false);
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

  return (
    <div className={styles.content}>
      <EventAbout {...props} />
      <div>
        <EventTickets
          tickets={tickets}
          setThankyouIsOpen={setThankyouIsOpen}
          setSubTotal={setSubTotal}
          subTotal={subTotal}
          ticketState={ticketState}
          setTicketState={setTicketState}
        />
      </div>
      {thankyouIsOpen ? (
        <EventThankyou
          setThankyouIsOpen={setThankyouIsOpen}
          subTotal={subTotal}
          ticketState={ticketState}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default EventContent;
