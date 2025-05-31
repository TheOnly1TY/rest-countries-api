import { createContext, useContext, useEffect, useReducer } from "react";

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const initialState = {
    countriesData: [],
    query: "",
    region: "all",
    errMessage: "default",
    isLoading: false,
    error: false,
    apiURL: "https://restcountries.com/v3.1/all",
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
            apiURL: "https://restcountries.com/v3.1/all",
          };
        }
        return {
          ...state,
          region: action.payload,
          apiURL: `https://restcountries.com/v3.1/region/${action.payload}`,
        };

      case "COUNTRIES/ERROR":
        if (state.region !== "all")
          return { ...state, error: action.payload, errMessage: "continent" };
        return {
          ...state,
          error: action.payload,
          errMessage: "default",
        };

      default:
        throw new Error("⚠️ACTION UNKNOWN!!!!!!!!!!!");
    }
  }
  const [
    { countriesData, query, region, isLoading, apiURL, error, errMessage },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchCountries() {
      try {
        dispatch({ type: "COUNTRIES/LOADING", payload: true });
        dispatch({ type: "COUNTRIES/ERROR", payload: false });

        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Failed to fetch Countries Data");

        const data = await res.json();

        if (data.length === 0) {
          dispatch({ type: "COUNTRIES/ERROR", payload: true });
        } else if (query) {
          const newData = data.filter((c) =>
            c.name.common.toLowerCase().includes(query.toLowerCase())
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
        query,
        region,
        isLoading,
        error,
        dispatch,
        errMessage,
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

export { CountriesProvider, useCountry };
