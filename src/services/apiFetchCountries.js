// fetch all countries
export async function fetchAllCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) throw new Error("Failed to fetch Countries Data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

// fetch country by Cca3Code (e.g, NGA, KEN...)
export async function fetchCountryByCCaCode(code) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!res.ok) throw new Error("Failed to fetch Countries Data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
