import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";
// Switch tag tries first Route, if doesn't match tries second route, if that doesn't work goes back to a 'not found' route (a 'catch all' if no route works)

//first route is 'exactly' the intended path. then you tell it what component to render out
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      {/* the catch all -> /store/:storeId */}
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
