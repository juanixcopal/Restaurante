import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./assets/scss/paper-dashboard.scss?v=0.1.0"
import "./assets/demo/demo.css"
import "perfect-scrollbar/css/perfect-scrollbar.css"

import AdminLayout from "./layouts/Admin";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user" render={(props) => <AdminLayout {...props}/>} />
        <Redirect to="/user/menu" />
    </Switch>
  </BrowserRouter>
);