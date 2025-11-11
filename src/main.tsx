import "./styles/app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NotFound from "./views/NotFound.tsx";
import App from "./App.tsx";

import Home from "./views/Home";
import Contact from "./views/Contact";

const router = createBrowserRouter([
  {
    Component: App,
    ErrorBoundary: NotFound,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
