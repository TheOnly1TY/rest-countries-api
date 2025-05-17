import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { CountriesList } from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";
import countriesLoader from "./components/CountriesList";
import countryLoader from "./components/CountryItem";

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
        loader: countryLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
