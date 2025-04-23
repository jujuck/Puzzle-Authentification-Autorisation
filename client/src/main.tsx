import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./contexts/Auth";
import App from "./App.tsx";
// Some code here
import Trainers from "./pages/Trainers.tsx";
import client from "./services/client.ts";
import Login from "./pages/Login.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // Some code here
  {
    path: "trainers",
    element: <Trainers />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-left" autoClose={1000} />
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>
);
