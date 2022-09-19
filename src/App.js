import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter } from "react-router-dom";
import {
  faHome,
  faBookmark,
  faCalendarAlt,
  faCompass,
  faUser,
  faUsers,
  faCog,
  faUserPlus,
  faLaptop,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

import { GlobalStyle } from './styles/globalStyles'

import "./App.css";
import NavBar from "./components/side-bars/NavBar";
import FriendActivity from "./components/side-bars/FriendActivity";
import Routes from "./Routes";


// Adds icons to be globally used
library.add(
  fab,
  faHome,
  faBookmark,
  faCompass,
  faCalendarAlt,
  faUser,
  faUsers,
  faCog,
  faUserPlus,
  faLaptop,
  faMobileAlt
);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes />
      <FriendActivity />
    </BrowserRouter>
  );
}

export default App;
