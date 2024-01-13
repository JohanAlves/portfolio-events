import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../util/backend";
import { useEffect, useState } from "react";

function AllEventsPage(props) {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search");
  const searchDate = searchParams.get("date");
  const allEvents = props.allEvents;
  const [events, setEvents] = useState(allEvents);
  const router = useRouter();

  function findEventsHandler(search, dateRange) {
    const searchFilter = search ? `&search=${search}` : "";
    const dateRangeFilter =
      dateRange && dateRange[0] != null && dateRange[1] != null
        ? `&date=${dateRange[0]}_${dateRange[1]}`
        : "";
    const fullPath = `/events/?${searchFilter}${dateRangeFilter}`;
    router.push(fullPath);
  }

  function filterEvents() {
    if (!searchText && !searchDate) {
      // Se ambos searchText e searchDate estiverem vazios, exiba todos os eventos
      return setEvents(allEvents);
    }

    const filteredEvents = allEvents.filter((evt) => {
      const eventDate = new Date(evt.date).getTime();
      if (searchText && searchDate) {
        // Se searchText e searchDate estiverem presentes, aplique a condição "AND"
        const [startDateStr, endDateStr] = searchDate.split("_");
        const startDate = new Date(startDateStr).getTime();
        const endDate = new Date(endDateStr).getTime();
        return (
          (evt.title.includes(searchText) ||
            evt.location.includes(searchText) ||
            evt.city.includes(searchText)) &&
          eventDate >= startDate &&
          eventDate <= endDate
        );
      } else if (searchText) {
        // Se apenas searchText estiver presente, aplique somente a parte do texto
        return (
          evt.title.includes(searchText) ||
          evt.location.includes(searchText) ||
          evt.city.includes(searchText)
        );
      } else if (searchDate) {
        const [startDateStr, endDateStr] = searchDate.split("_");
        const startDate = new Date(startDateStr).getTime();
        const endDate = new Date(endDateStr).getTime();
        // Se apenas searchDate estiver presente, aplique somente a data
        return eventDate >= startDate && eventDate <= endDate;
      }
    });

    // Atualize o estado com os eventos filtrados
    setEvents(filteredEvents);
  }

  useEffect(() => {
    filterEvents();
  }, [searchText, searchDate]);

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      allEvents,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
