import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */

// const Location = useLocation()
// const {pathName} = Location

export function SideNav() {
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
        <li>
          <SideNavItem name="Weather" faclass="fa fa-cloud" />
        </li>
        <li>
          <SideNavItem name="Cities" faclass="fa fa-city" />
        </li>
        <li>
          <SideNavItem name="Map" faclass="fa fa-cloud" />
        </li>
        <li>
          <SideNavItem name="Settings" faclass="fa fa-map-marker" />
        </li>
      </ul>
      <div
        className="flex"
        style={{
          //   border: "1px black solid ",
          alignContent: "center",
          justifyContent: "center",
          padding: "5px",

          marginTop: "60%",
        }}
      >
        <div className="flex modes">
          <i
            className="fa fa-moon cursor-pointer mode active"
            style={{
              borderRight: "1px black solid ",

              //   backgroundColor: "var(--dark-ash-text)",
            }}
          ></i>

          <i
            className="fa fa-sun cursor-pointer mode"
            style={{
              padding: "10px",
            }}
          ></i>
        </div>
      </div>
      <Dropdown />
    </nav>
  );
}

function Dropdown() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
    console.log(toggle);
  }
  console.log(toggle ? "fa fa-xmark" : "fa fa-bars");
  return (
    <>
      <div className="toggle_Btn" onClick={handleClick} key="unique">
        <i
          key={4}
          className={toggle ? "fa fa-xmark" : "fa fa-bars"}
          style={{ color: " #979DA5", width: "30px", height: "30px" }}
        ></i>
        {/* <i
          className="fa fa-xmark"
          style={{ color: " #979DA5", width: "50px", height: "50px" }}
        ></i> */}
      </div>

      <div className={toggle ? "dropdown--menu open" : "dropdown--menu"}>
        <DropdownItem label="Weather" active=" active" />
        <DropdownItem label="Cities" />
        <DropdownItem label="Maps" />
        <DropdownItem label="Settings" />
      </div>
    </>
  );
}
function DropdownItem({ label, active = "" }) {
  return (
    <li>
      <a className={"dropdown--item" + active} href="#">
        {label}
      </a>
    </li>
  );
}

function SideNavItem({ name, faclass }) {
  return (
    <>
      <NavLink className="flex" to={"/" + name}>
        <i className={faclass + " " + " icons"}> </i> {name}
      </NavLink>
    </>
  );
}
