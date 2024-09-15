/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

import "../App.css";
import "../all.css";
import "../all.js";
import Weather from "./pages/Weather.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MapPage from "./pages/Map.jsx";
import NotFound from "./pages/notFoundPage.jsx";

const router = createBrowserRouter([{
  path: '/',
  element: <Weather/>,
  errorElement: <NotFound/>
},{
  path: '/Weather',
  element: <Weather/>,
  errorElement: <NotFound/>
},
{
  path:'/Map',
  element: <MapPage/>
}])

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
        <RouterProvider router={router} />
        
       {/* <Weather/> */}
      </weatherContext.Provider>
    </>
  );
}

export default App;
