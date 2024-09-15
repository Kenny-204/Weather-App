/* eslint-disable react-refresh/only-export-components */

import {  useContext, useState } from "react";
import "../../App.css";
// src\App.css
import "../../all.css";
import "../../all.js";
import {SideNav} from "../../components/sidenav.jsx";
// src\components\sidenav.jsx
import { Main } from "../../components/Main.jsx";
import { Aside } from "../../components/Aside.jsx";
import { weatherContext } from "../App.jsx";




function Weather(){
  const {state} = useContext(weatherContext)
      return (
        <>
         
            <div className="container">
              <SideNav />
              <Main />
           {state.fetched &&   <Aside />}
            </div>
         
        </>
      );
}

export default Weather
