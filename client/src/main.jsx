import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LanguagePage from "./pages/LanguagePage/LanguagePage";
import PresentationPage from "./pages/PresentationPage/PresentationPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import AdminPage from "./pages/AdminPage/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/langage",
    element: <LanguagePage />,
  },
  {
    path: "/presentation",
    element: <PresentationPage />,
  },
  {
    path: "/projet",
    element: <ProjectPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
