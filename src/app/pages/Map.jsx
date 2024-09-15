import { Searchbar } from "../../components/Searchbar";
import { SideNav } from "../../components/sidenav";
import { useContext, useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { weatherContext } from "../App";

function MapPage() {
  const state = useContext(weatherContext);
  const [longitude, setLongitude] = useState(-0.09);
  const [latitude, setLatitude] = useState(51.505);

  console.log(state);
  useEffect(() => {
    const getLongAndLat = async function () {
      try {
        const apiKey = "196cac335c3a20789d16f75e87f84808";
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${state.state.country}&limit=5&appid=${apiKey}`
        );
        const data = await response.json();
        setLongitude(data[0].lon);
        setLatitude(data[0].lat);
      } catch (e) {
        console.log(e.message);
      }
    };
    if (state.state.country) {
      getLongAndLat();
    }
  }, [state]);
  // const getLongAndLat = async function () {
  //   const apiKey = "196cac335c3a20789d16f75e87f84808";
  //   const response = await fetch(
  //     `https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${apiKey}`
  //   );
  //   const data = response.json();
  //   console.log(data);
  // };

  // const map = L.map('map').setView([51.505, -0.09], 13);
  // const apiKey = '151084208473214e15895437x113612 ';

  // const getLongAndLat  = async function(){
  // const response = await fetch(`https://geocode.xyz/Lagos.,+57632+Berzhausen?json=1&auth=${apiKey}`)
  // const data = await response.json()
  // console.log(data)
  // }
  // getLongAndLat()

  return (
    <>
      <div className="container flex">
        <SideNav />
        <div className="main">
          <Searchbar />

          <div className="map" id="map">
            <SimpleMap long={longitude} lat={latitude} place={state.state.country} />
          </div>
        </div>
      </div>
    </>
  );
}
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const SimpleMap = ({ long, lat,place="london or something" }) => {
  const mapRef = useRef(null);

  // const latitude = lat;
  // const longitude = long;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[lat, long]}
      zoom={13}
      ref={mapRef}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView center={[lat, long]} zoom={13} />
      <Marker position={[lat, long]}>
        <Popup>This is {place}</Popup>
      </Marker>

      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};
export default MapPage;
