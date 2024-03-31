/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    }
    fetchCities();
  }, []);

  const [currentCity, setCurrentCity] = useState({});

  async function getCity(id) {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      console.log(response);
      const data = await response.json();
      setCurrentCity(() => data);
    } catch (e) {
      console.dir(e);
    }
    setIsLoading(false);
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "Cities contect was used outside the CitiesContext Provider"
    );
  return context;
}
export { CitiesProvider, useCities };
