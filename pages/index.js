import Head from "next/head";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../util/backend";

function HomePage(props) {
  const { featuredEvents } = props;

  return (
    <div>
      <Head>
        <title>Home | Events</title>
      </Head>
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
    revalidate: 60,
  };
}

export default HomePage;
