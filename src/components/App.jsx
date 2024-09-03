/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "../App.css";
import "../all.css";
import "../all.js";
import {SideNav} from "./sidenav.jsx";
import { Main } from "./Main.jsx";
import { Aside } from "./Aside.jsx";

export const weatherContext = createContext();

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
    conditionImg: "",
    
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
       {state.fetched &&   <Aside />}
        </div>
      </weatherContext.Provider>
    </>
  );
}

export default App;
