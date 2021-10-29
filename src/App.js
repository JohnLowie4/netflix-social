import "./App.css";
import NavBar from "./components/side-bars/NavBar";
import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far, faCompass } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faBookmark,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faBookmark, far, faCompass, faCalendarAlt);
// library.add(far, faCompass);

function App() {
  return <NavBar />;
}

export default App;
