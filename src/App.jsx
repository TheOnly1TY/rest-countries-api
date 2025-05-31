import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { CountriesList } from "./components/CountriesList";
import { CountriesProvider } from "./context/countriesContext";
import HomePage from "./pages/HomePage";
import countryLoader from "./components/CountryItem";
import { CountryDetails } from "./pages/CountryDetails";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <CountriesProvider>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//       </CountriesProvider>
//     </BrowserRouter>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: ":cca3",
    element: <CountryDetails />,
    loader: countryLoader,
  },
]);

export default function App() {
  return (
    <CountriesProvider>
      <RouterProvider router={router} />;
    </CountriesProvider>
  );
}
