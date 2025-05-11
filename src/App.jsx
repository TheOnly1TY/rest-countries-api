import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { CountriesList } from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";
import countriesLoader from "./components/CountriesList";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <CountriesList />,
        loader: countriesLoader,
      },
      {
        path: ":cca3",
        element: <CountryDetails />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
