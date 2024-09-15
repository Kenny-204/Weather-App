import { useContext, useEffect, useState } from "react";
import { weatherContext } from "../app/App.jsx";

export function Searchbar() {
  const { updateState } = useContext(weatherContext);
  const [isLoading, setIsLoading] = useState(false);

  const key = "fe2cbc6eac7045b4b0f111431241708";
  const [query, setQuery] = useState("");

  const handleUpdateState = function (data) {
    updateState("temperature", data.current.temp_c);
    updateState(
      "chanceOfRain",
      data.forecast.forecastday[0].day.daily_chance_of_rain
    );
    updateState("forecast", data.forecast.forecastday);
    updateState("feelsLike", data.current.feelslike_c);
    updateState("uvIndex", data.current.uv);
    updateState("wind", data.current.wind_kph);
    updateState("visibility", data.current.vis_km);
    updateState("pressure", data.current.pressure_in);
    updateState("sunset", data.forecast.forecastday[0].astro.sunset);
    updateState("humidity", data.current.humidity);
    updateState("fetched", Boolean(data));
    updateState("conditionImg", data.current.condition.icon);
    updateState("country", data.location.name);
    
  };

  const getData = async function (country) {
    try {
      const response = await fetch(
        `        https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&days=7&aqi=no&alerts=no`
      );
      const data = await response.json();
      
      handleUpdateState(data);
      console.log(query);
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getData(query);
        }}
      >
        <div className="search-container">
          <input
            onChange={(e) =>
              setQuery(
                e.target.value[0].toUpperCase() +
                  e.target.value.slice(1, e.target.value.length)
              )
            }
            className="searchbar"
            type="text"
            placeholder="Search for cities..."
          />
          <button className="submit">
            <i className="fa fa-search cursor-pointer"></i>
          </button>
        </div>
      </form>
    </>
  );
}

