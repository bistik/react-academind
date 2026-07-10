import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  let title =
    error?.data && error.data?.title
      ? error.data.title
      : "Something went wrong";
  let message = error?.data && error.data?.message ? error.data.message : "";
  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
}

export default ErrorPage;
