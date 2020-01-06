import React from "react";
import ReactDOM from "react-dom";
import BookingForm from "./components/BookingForm";
import "antd/dist/antd.css";
import "./styles.css";
// import ViewBooking from "./components/ViewBooking";
import CustomBookingForm from "./components/CustomBookingForm";
import Login from "./components/login/login"
import Signin1 from "./components/signin/signin";
import ViewBooking from './components/viewBooking/viewBooking';
import 'antd/dist/antd.css';
import 'tachyons';
// import { Router, Link } from "@reach/router"
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import RenderCustomBookingForm from "./components/RenderCustomBookingForm";
import HomePage from "./components/homepage/homepage";
import Terminal from "./components/terminal/terminal";




// ReactDOM.render(
// //   <Router>
// //     <BookingForm path="/" />
// //     <CustomBookingForm path="view" />
// //   </Router>
//   <div>
//     {/* // <h1>Booking Form</h1> */}
//     <App />,
//     {/* <RenderCustomBookingForm /view > */}
//     {/* <CustomBookingForm "/view"> */}
//   </div>,
//   document.getElementById("root")
// );

// serviceWorker.unregister();


const routing = (
  <Router>
    <div>
      <Route path="/home" component={HomePage} />
      <Route path="/book" component={CustomBookingForm} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signin1} />
      <Route path="/view" component={ViewBooking} />
      <Route path="/createTerminal" component={Terminal} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
