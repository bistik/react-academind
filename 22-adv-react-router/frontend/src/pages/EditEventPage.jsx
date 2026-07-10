import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  console.log("event data in editeventpage", data.event);
  return <EventForm event={data.event} method="patch" />;
}

export default EditEventPage;
