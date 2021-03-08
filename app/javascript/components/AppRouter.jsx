import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BicycleForm from "./BicycleForm";
import BicycleGrid from "./BicycleGrid";
import BicycleShow from "./BicycleShow";
import Dashboard from "./Dashboard";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={BicycleGrid} />
          <Route exact path="/bicycle/:bicycleId" component={BicycleShow} />
          <Route
            exact
            path="/bicycle/:bicycleId/order"
            component={BicycleForm}
          />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
