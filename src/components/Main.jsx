import { useContext } from "react";
import { weatherContext } from "./App";
import { AirConditions } from "./Forecasts";
import { Forecasts } from "./Forecasts";
import { Searchbar } from "./Searchbar";

export function Main() {
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
        <img src={state.conditionImg} width="20%" />
      </div>
      <Forecasts />
      <AirConditions />
    </main>
  );
}
