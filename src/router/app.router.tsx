import { PortfolioLayout } from "@/layouts/PortfolioLayout";
import { HomePage } from "@/pages/HomePage";
import { lazy } from "react";
import { createHashRouter, Navigate } from "react-router";

const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));


export const AppRouter = createHashRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
