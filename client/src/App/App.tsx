import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, NotFound, User } from "../sections";
import { Viewer } from "../lib/types";

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  didRequest: false,
};

function App() {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  console.log(viewer);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} viewer={viewer} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} setViewer={setViewer} />}
        />
        <Route
          exact
          path="/user/:id"
          render={(props) => <User {...props} viewer={viewer} />}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;