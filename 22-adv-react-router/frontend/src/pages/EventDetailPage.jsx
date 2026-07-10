import { Link, data, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export async function loader({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
  );
  if (!response.ok) {
    throw data(
      { message: "Error fetching event detail" },
      { status: response.status },
    );
  }
  return response;
}

export async function action({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
    },
  );
  if (!response.ok) {
    throw data(
      { message: "Error deleting event" },
      { status: response.status },
    );
  }
  return redirect("/events");
}

export default EventDetailPage;
