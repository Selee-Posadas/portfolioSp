import { PortfolioLayout } from "@/layouts/PortfolioLayout";
import { HomePage } from "@/pages/HomePage";
import { lazy } from "react";
import { createHashRouter, Navigate } from "react-router";

const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));


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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
