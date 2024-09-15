import { useContext } from "react";
import { weatherContext } from "../app/App.jsx";

export function Aside() {
  const { state } = useContext(weatherContext);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
            weather={day.day.condition.text}
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
        <img src={imgsrc} alt="" width="31.88px" height="32" />
        <p>{weather}</p>
        <p>{temperature}</p>
      </li>
      <hr />
    </>
  );
}
