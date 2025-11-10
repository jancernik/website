import "./styles/app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./views/Home.tsx";
import Contact from "./views/Contact.tsx";
import NotFound from "./views/NotFound.tsx";
import Header from "./components/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
