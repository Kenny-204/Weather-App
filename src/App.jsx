/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <div className="container">
      <SideNav />
      <Main />
      <Aside />
    </div>
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
    </nav>
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

function Main() {
  return (
    <main className="main">
      <Searchbar />
      <div className="city">
        <h1>Your City</h1>
        <h3>Chance of rain: 0%</h3>
      </div>
      <h1 className="temperature">0 C</h1>
      <Forecasts />
      <AirConditions />
    </main>
  );
}

function Searchbar() {
  return (
    <>
      <input
        className="searchbar"
        type="text"
        placeholder="Search for cities..."
      />
    </>
  );
}

function Forecasts() {
  return (
    <section>
      <div className="forecasts ">
        <h3>Tomorrows Forecast</h3>
        <div className="flex">
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
  return (
    <div className="forecasts ">
      <h3>Air Conditions</h3>
      <div className="flex air-cond">
        <AirCondition title="Feels like" cap="0C" />
        <AirCondition title="UV index" cap="3" />
        <AirCondition title="Wind" cap="0km/h" />
        <AirCondition title="Visisbility" cap="0km" />
      </div>
      <div className="flex air-cond">
        <AirCondition title="Pressure" cap="0hPa" />
        <AirCondition title="Sunset" cap="20:58" />
        <AirCondition title="Humidity" cap="0%" />
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
  return (
    <aside className="aside">
      <p>7-DAY FORECAST</p>
      <ul>
        <AsideItem
          day="Today"
          imgsrc="vite.svg"
          weather="Rainy"
          temperature="0 C"
        />
        <AsideItem
          day="Today"
          imgsrc="vite.svg"
          weather="Rainy"
          temperature="0 C"
        />
        <AsideItem
          day="Today"
          imgsrc="vite.svg"
          weather="Rainy"
          temperature="0 C"
        />
      </ul>
    </aside>
  );
}

function AsideItem({ day, imgsrc, weather, temperature }) {
  return (
    <>
      <li className="flex">
        <p>{day}</p>
        <img src={imgsrc} alt="" />
        <p>{weather}</p>
        <p>{temperature}</p>
      </li>
      <hr />
    </>
  );
}

export default App;
