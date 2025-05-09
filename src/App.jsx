import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { CountriesList } from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CountriesList />} />
          <Route path="country/" element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
