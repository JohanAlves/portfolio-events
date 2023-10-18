import { useRouter } from "next/router";
import { getEventById } from "../../backend/dummy-data";
import EventHero from "../../components/event-detail/EventHero";
import EventContent from "../../components/event-detail/eventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";

function EventDetailPage() {
  const router = useRouter();

  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </div>
    );
  }

  return (
    <>
      <EventHero image={event.image} imageAlt={event.title} />
      <EventContent {...event} />
    </>
  );
}

export default EventDetailPage;
