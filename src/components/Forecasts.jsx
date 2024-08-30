/* eslint-disable react/prop-types */
import { useContext } from "react";
import { weatherContext } from "./App";

export function Forecasts() {
  const { state } = useContext(weatherContext);
  // state.forecast[0].hour.map((hour,i) =>{<Forecast time={hour.time.slice(-5)} temperature={hour.temp_c} imgsrc= "hour.condition.icon"  />} )
  // console.log(state.forecast[0].hour)
  return (
    <section>
      <div className="forecasts ">
        <h3>Tomorrows Forecast</h3>
        <div className="flex forecasts-list">
          {state.forecast[0]?.hour.map((hour, i) => {
            if (i > 5) return;
            return (
              <Forecast
                key={i}
                time={hour.time.slice(-5)}
                temperature={hour.temp_c}
                imgsrc={hour.condition.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Forecast({ time, imgsrc, temperature }) {
  return (
    <>
      <div className="forecast flex">
        <h3>{time}</h3>
        <img src={imgsrc} alt="" />
        <p>{temperature}</p>
      </div>
    </>
  );
}

export function AirConditions() {
  const { state } = useContext(weatherContext);

  return (
    <div className="forecasts ">
      <h3>Air Conditions</h3>
      <div className="flex air-cond">
        <AirCondition
          title="Feels like"
          cap={state.feelsLike || "--"}
          faclass="fa fa-thermometer-2"
        />
        <AirCondition
          title="UV index"
          cap={state.uvIndex || "--"}
          faclass="fa fa-sun"
        />
        <AirCondition
          title="Wind"
          cap={state.wind + "km/h"}
          faclass="fa fa-wind"
        />
        <AirCondition
          title="Visisbility"
          cap={state.visibility + "km"}
          faclass="fa fa-eye"
        />
        <AirCondition
          title="Pressure"
          cap={state.pressure + "hPa"}
          faclass="fa fa-gauge"
        />
        <AirCondition
          title="Sunset"
          cap={state.sunset || "--:--"}
          faclass="fa fa-cloud-sun"
        />
        <AirCondition
          title="Humidity"
          cap={state.humidity + "%"}
          faclass="fa fa-shower"
        />
      </div>
    </div>
  );
}
function AirCondition({ title, cap, faclass }) {
  return (
    <div className="air">
      <span className="flex" style={{ gap: "1rem" }}>
        <i className={faclass}></i>
        <h3>{title}</h3>
      </span>
      <h1>{cap}</h1>
    </div>
  );
}
