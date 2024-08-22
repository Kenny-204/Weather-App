/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

const weatherContext = createContext();

function App() {
  const [state, setState] = useState({
    country: "",
    temperature: "",
    chanceOfRain: "",
    forecast: [],
    feelsLike: "",
    uvIndex: "",
    wind: "",
    visibility: "",
    pressure: "",
    sunset: "",
    humidity: "",
    fetched: "",
  });
  const updateState = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };
  return (
    <>
      <weatherContext.Provider value={{ state, updateState }}>
        <div className="container">
          <SideNav />
          <Main />
          <Aside />
        </div>
      </weatherContext.Provider>
    </>
  );
}

function Main() {
  const { state } = useContext(weatherContext);

  return (
    <main className="main">
      <Searchbar />
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <div className="city">
          <h1>{state.country || "--"} </h1>
          <h3>Chance of rain: {state.chanceOfRain || "-"}%</h3>
          <h1 className="temperature">{state.temperature || "--"}&deg;C</h1>
        </div>
        <img src="vite.svg" width="20%" />
      </div>
      <Forecasts />
      <AirConditions />
    </main>
  );
}

function Searchbar() {
  const { updateState } = useContext(weatherContext);

  const key = "fe2cbc6eac7045b4b0f111431241708";
  const [query, setQuery] = useState("london");

  const getData = async function (country) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&days=7&aqi=yes&alerts=no`
      );
      const data = await response.json();

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
          getData("country");
          updateState("country", query);
        }}
      >
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
        {/* <button className="submit">send</button> */}
      </form>
    </>
  );
}

function SideNav() {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <div className="flex logo">
            <img src="weather-logo.png" className="logo-img" />
            <h2>
              THE <span> WEATHER</span>
            </h2>
          </div>
        </li>
        <SideNavItem className="active" name="Weather" />
        <SideNavItem name="Cities" />
        <SideNavItem name="Map" />
        <SideNavItem name="Settings" />

      </ul>
      <Dropdown/>
    </nav>
  );
}

function Dropdown() {
  return (
    <>
      <div className="toggle_Btn">
        <svg
          fill="#42A7C3"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
        >
          <path d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z" />
        </svg>
      </div>

      <div className="dropdown--menu ">
        <li>
          <a className="dropdown--item" href="#">
            Product
          </a>
        </li>
        <li>
          <a className="dropdown--item" href="#">
            Contact Us
          </a>
        </li>
        <li>
          <a className="dropdown--item" href="#">
            About Us
          </a>
        </li>
        <button className="dropdown--item">Sign Up</button>
      </div>
    </>
  );
}

function SideNavItem({ name, className = "" }) {
  return (
    <li className={className}>
      <span>
        <a href="#">{name}</a>
      </span>
    </li>
  );
}

function Forecasts() {
  const { state } = useContext(weatherContext);

  return (
    <section>
      <div className="forecasts ">
        <h3>Tomorrows Forecast</h3>
        <div className="flex forecasts-list">
          {/* {state.forecast[0]} */}
          <Forecast time="6:00 AM" imgsrc="#" temperature="0 C" />
          <Forecast time="6:00 AM" imgsrc="#" temperature="0 C" />
          <Forecast time="6:00 AM" imgsrc="#" temperature="0 C" />
          <Forecast time="6:00 AM" imgsrc="#" temperature="0 C" />
          <Forecast time="6:00 AM" imgsrc="#" temperature="0 C" />
          <Forecast time="6:00 AM" imgsrc="#" temperature="0 C" />
        </div>
      </div>
    </section>
  );
}

function Forecast({ time, _, temperature }) {
  return (
    <>
      <div className="forecast flex">
        <h3>{time}</h3>
        <img src="vite.svg" alt="" />
        <p>{temperature}</p>
      </div>
    </>
  );
}

function AirConditions() {
  const { state } = useContext(weatherContext);

  return (
    <div className="forecasts ">
      <h3>Air Conditions</h3>
      <div className="flex air-cond">
        <AirCondition title="Feels like" cap={state.feelsLike || "--"} />
        <AirCondition title="UV index" cap={state.uvIndex || "--"} />
        <AirCondition title="Wind" cap={state.wind + "km/h"} />
        <AirCondition title="Visisbility" cap={state.visibility + "km"} />
      </div>
      <div className="flex air-cond">
        <AirCondition title="Pressure" cap={state.pressure + "hPa"} />
        <AirCondition title="Sunset" cap={state.sunset || "--:--"} />
        <AirCondition title="Humidity" cap={state.humidity + "%"} />
      </div>
    </div>
  );
}

function AirCondition({ title, cap }) {
  return (
    <div className="air">
      <span></span>
      <h3>{title}</h3>
      <h1>{cap}</h1>
    </div>
  );
}

function Aside() {
  const { state } = useContext(weatherContext);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <aside className="aside">
      <p>7-DAY FORECAST</p>
      <ul>
        {state.forecast.map((day, i) => (
          <AsideItem
            day={
              i === 0
                ? "Today"
                : i === 1
                ? "Tomorrow"
                : days[new Date(day.date_epoch * 1000).getDay()]
            }
            imgsrc={day.day.condition.icon}
            temperature={day.day.avgtemp_c}
            key={i}
          />
        ))}
      </ul>
    </aside>
  );
}

function AsideItem({ day, imgsrc, weather, temperature }) {
  return (
    <>
      <li className="flex">
        <p>{day}</p>
        <img src={imgsrc} alt="" width="31.88" height="32" />
        <p>{weather}</p>
        <p>{temperature}</p>
      </li>
      <hr />
    </>
  );
}

export default App;
