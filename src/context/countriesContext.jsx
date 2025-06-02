import { createContext, useContext, useEffect, useReducer } from "react";

const CountriesContext = createContext();

const BASE_URL = "https://restcountries.com/v3.1";

function CountriesProvider({ children }) {
  const initialState = {
    countriesData: [],
    countryDetails: [],
    query: "",
    region: "all",
    isLoading: false,
    error: false,
    apiURL: `${BASE_URL}/all`,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_COUNTRIES":
        return { ...state, countriesData: action.payload };

      case "COUNTRIES/LOADING":
        return { ...state, isLoading: action.payload };

      case "COUNTRIES/SEARCH":
        return {
          ...state,
          query: action.payload,
        };

      case "COUNTRIES/REGION":
        if (action.payload === "all") {
          return {
            ...state,
            region: action.payload,
            apiURL: `${BASE_URL}/all`,
          };
        }
        return {
          ...state,
          region: action.payload,
          apiURL: `${BASE_URL}/region/${action.payload}`,
        };

      case "SET_COUNTRIES/DETAILS":
        return { ...state, countryDetails: action.payload };

      case "COUNTRIES/ERROR":
        return {
          ...state,
          error: action.payload,
        };

      default:
        throw new Error("⚠️ACTION UNKNOWN!!!!!!!!!!!");
    }
  }
  const [
    { countriesData, query, region, isLoading, apiURL, error, countryDetails },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchCountries() {
      try {
        dispatch({ type: "COUNTRIES/LOADING", payload: true });
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Failed to fetch Countries Data");
        const data = await res.json();

        if (data.length === 0) {
          dispatch({ type: "COUNTRIES/ERROR", payload: true });
        } else if (query) {
          const newData = data.filter((data) =>
            data.name.common.toLowerCase().includes(query.toLowerCase())
          );
          if (newData.length === 0)
            dispatch({ type: "COUNTRIES/ERROR", payload: true });
          dispatch({ type: "SET_COUNTRIES", payload: newData });
        }
        if (query === "") {
          dispatch({ type: "SET_COUNTRIES", payload: data });
        }
      } catch (error) {
        console.error("❌ Fetch error:", error.message);
      } finally {
        dispatch({ type: "COUNTRIES/LOADING", payload: false });
      }
    }

    fetchCountries();
  }, [apiURL, query]);

  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        countryDetails,
        query,
        region,
        isLoading,
        error,
        dispatch,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountry() {
  const context = useContext(CountriesContext);
  if (context === undefined)
    throw new Error(
      "Countries Context must be used within a Countries Provider"
    );

  return context;
}

export { CountriesProvider, useCountry, BASE_URL };
