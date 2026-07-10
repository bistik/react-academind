import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, data, Await } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  }
  const resData = await response.json();
  console.log("resData", resData);
  return resData.events;
}

export function loader() {
  return {
    events: loadEvents(),
  };
}
export default EventsPage;
