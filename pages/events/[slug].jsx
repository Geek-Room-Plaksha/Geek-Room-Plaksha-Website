import Head from "next/head";
import EventPage from "@/components/eventPage/Pages/EventPage";
import staticEventsData from "@/components/eventPage/Data/EventData";

export default function Event({ eventData }) {
  return (
    <>
      <Head>
        <title>{eventData.title}</title>
        <meta name="description" content={eventData.shortDescription} />
        <meta property="og:title" content={eventData.title} />
        <meta property="og:description" content={eventData.shortDescription} />
        <meta property="og:image" content={eventData.thumbnail} />
      </Head>
      <EventPage eventData={eventData} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const event = staticEventsData.find((event) => event.slug === slug);

  // If event exists and isSlug is not explicitly false, render the page
  if (event && event.isSlug !== false) {
    return {
      props: {
        eventData: event
      },
      revalidate: 20
    };
  }
  // If event exists but isSlug is false, redirect to external URL if available
  else if (event && event.isSlug === false && event.externalUrl) {
    return {
      redirect: {
        destination: event.externalUrl,
        permanent: false
      }
    };
  }
  // If no event found or other cases, return 404
  else {
    return {
      notFound: true
    };
  }
};

export async function getStaticPaths() {
  // Filter out events with isSlug set to false
  const paths = staticEventsData
    .filter((event) => event.isSlug !== false) // Only include events that should have slug pages
    .map((event) => ({
      params: { slug: event.slug }
    }));
  return {
    paths: paths,
    fallback: false // can also be true or 'blocking'
  };
}
