import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { RouterProvider } from "react-router-dom";
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
  <ApolloProvider client={client}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    <RouterProvider router={router} />
  </ApolloProvider>
);
