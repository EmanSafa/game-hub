import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/pages/HomePage";
import CardDetailis from "../components/CardDetailis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: <CardDetailis/>,
      }
    ],
  },
]);

export default router;
