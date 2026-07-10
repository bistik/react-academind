import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  data,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting" ? true : false;
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form className={classes.form} method={method}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event ? event.title : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ""}
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  let url = "http://localhost:8080/events";
  console.log("params", params);
  if (method.toUpperCase() === "PATCH") {
    url = "http://localhost:8080/events/" + params.eventId;
  }
  console.log("url", url);
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    }),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw data(
      { message: "Error in creating event" },
      { status: response.status },
    );
  }
  // await console.log(response.data);

  return redirect("/events");
}

export default EventForm;
