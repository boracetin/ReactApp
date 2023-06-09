import React from 'react';
import store from "./Services/store";
import {
  RouterProvider
} from "react-router-dom";
import {
  Provider
} from "react-redux";
import ReactDOM from 'react-dom/client';
import {
  router
} from "./Routes/router";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
  Provider store = {
    store
  } >
  <
  RouterProvider router = {
    router
  }
  /> </Provider >
);