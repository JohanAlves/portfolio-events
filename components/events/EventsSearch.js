import { useRef, useState } from "react";
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
      {/* <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select ref={yearInputRef} name="" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select ref={monthInputRef} name="" id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div> */}
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
