import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountriesProvider } from "./context/countriesContext";
import { HomePage } from "./pages/HomePage";
import { AppLayout } from "./pages/AppLayout";
import { CountryDetails } from "./components/CountryDetails";
import { ThemeProvider } from "./context/themeContext";

export default function App() {
  return (
    <BrowserRouter>
      <CountriesProvider>
        <ThemeProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path=":cca3" element={<CountryDetails />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </CountriesProvider>
    </BrowserRouter>
  );
}
