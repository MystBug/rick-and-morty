import { ErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error.status}, {error.statusText}, {error.data}
        </i>
      </p>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
}
