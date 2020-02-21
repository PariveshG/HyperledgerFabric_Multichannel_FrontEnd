import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Createkyc from "./createkyc";

const Router = () => (
  <BrowserRouter>
    <Switch>
      
      <Route path="/createkyc" component={Createkyc} />
    </Switch>
  </BrowserRouter>
);

export default Router;


