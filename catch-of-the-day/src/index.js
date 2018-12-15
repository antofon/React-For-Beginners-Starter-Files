import React, { Component } from "react";
import { render } from "react-dom";
// can get rid of App and StorePicker components because they'll be indirectly routed in router.js file
// import StorePicker from "./components/StorePicker";
// import App from "./components/App";
import Router from "./components/Router";
import "./css/style.css";
render(<Router />, document.querySelector("#main"));
