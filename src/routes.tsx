import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Character from "./routes/character";
import { Results } from "./components/search/Results.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search/:searchTerm",
    element: (
      <div>
        <Root />
        <Results />
      </div>
    ),
  },
  {
    path: "character-details/:characterId",
    element: <Character />,
  },
]);
