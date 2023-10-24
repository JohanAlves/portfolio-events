import { useState } from "react";
import Button from "../ui/Button";
import styles from "./EventsSearch.module.css";
import EventSearchField from "../ui/EventSearchField";
import EventDatePicker from "../ui/EventDatePicker";

function EventsSearch(props) {
  const [search, setSearch] = useState("");
  const [dateRange, setDataRange] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    const SelectedDateRange =
      dateRange && dateRange.map((obj) => obj.$d.toISOString().slice(0, 10));
    props.onSearch(search, SelectedDateRange);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.controlSearch}>
          <EventSearchField setSearch={setSearch} />
        </div>
        <div className={styles.controlDate}>
          <EventDatePicker setDataRange={setDataRange} />
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
