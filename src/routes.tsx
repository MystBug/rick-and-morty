import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import { Layout } from "./Layout";

import { Results } from "./routes/Results.page";
import { TopTen } from "./routes/TopTen.page";
import { Character } from "./routes/Character.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <TopTen />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "search/:searchTerm",
    element: (
      <Layout>
        <Results />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "character-details/:characterId",
    element: (
      <Layout>
        <Character />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);
