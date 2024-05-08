import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

import { router } from "./routes.tsx";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={darkTheme}>
    <ApolloProvider client={client}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ApolloProvider>
  </ThemeProvider>
);
