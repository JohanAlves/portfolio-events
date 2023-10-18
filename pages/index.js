import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../util/backend";

function HomePage(props) {
  const { featuredEvents } = props;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
  };
}

export default HomePage;
