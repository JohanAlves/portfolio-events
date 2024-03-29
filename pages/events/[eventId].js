import EventHero from "../../components/event-detail/EventHero";
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getEventById } from "../../util/backend";
import Head from "next/head";

function EventDetailPage({ events }) {
  const event = events[0];
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
      <Head>
        <title>{event.title + " | Events"}</title>
      </Head>
      <EventHero image={event.image} imageAlt={event.title} />
      <EventContent {...event} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { eventId } = context.query;
  const events = await getEventById(eventId);
  return {
    props: {
      events,
    },
  };
}

export default EventDetailPage;
