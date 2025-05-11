export async function fetchCountriesData() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) throw new Error("Failed to fetch Countries Data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
