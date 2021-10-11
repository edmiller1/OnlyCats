import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login } from "../sections";
import { Viewer } from "../lib/types";

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  didRequest: false,
};

function App() {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} setViewer={setViewer} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
