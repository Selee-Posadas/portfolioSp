import { RouterProvider } from "react-router";
import { AppRouter } from "./router/app.router";

export const PortfolioApp = () => {
  return (
    <RouterProvider router={AppRouter} />
  )
}
