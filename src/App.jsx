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
      <input
        className="searchbar"
        type="text"
        placeholder="Search for cities..."
      />
      <div className="city">
        <h1>Your City</h1>
        <h3>Chance of rain: 0%</h3>
      </div>
      <h1 className="temperature">0 C</h1>
    </main>
  );
}



function Aside() {
  return (
    <aside className="aside">
      <p>7-DAY FORECAST</p>
      <ul>
        <AsideItem day="Today" imgsrc="#" weather="Rainy" temperature="0 C" />
        <AsideItem day="Today" imgsrc="#" weather="Rainy" temperature="0 C" />
        <AsideItem day="Today" imgsrc="#" weather="Rainy" temperature="0 C" />
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
