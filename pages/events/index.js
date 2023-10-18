import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../util/backend";

function AllEventsPage(props) {
  const { allEvents } = props;
  const router = useRouter();

  function findEventsHandler(search, dateRange) {
    const searchFilter = search ? `&search=${search}` : "";
    const dateRangeFilter = dateRange
      ? `&date=${dateRange[0]}_${dateRange[1]}`
      : "";
    const fullPath = `/events/?${searchFilter}${dateRangeFilter}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents,
    },
  };
}

export default AllEventsPage;
