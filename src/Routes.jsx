import React from "react";
import { Switch, Route } from "react-router-dom";

import Settings from "./components/Settings";
import Parties from "./components/Parties";
import Friends from "./components/Friends";
import ComingSoon from "./components/ComingSoon";
import Browse from "./components/Browse";
import MyList from "./components/MyList";
import Home from "./components/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/parties">
        <Parties />
      </Route>
      <Route path="/friends">
        <Friends />
      </Route>
      <Route path="/coming-soon">
        <ComingSoon />
      </Route>
      <Route path="/browse">
        <Browse />
      </Route>
      <Route path="/my-list">
        <MyList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
