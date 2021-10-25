import React, { useState, useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, NotFound, User } from "../sections";
import { ErrorNotification } from "../components";
import { Viewer } from "../lib/types";
import { LOG_IN } from "../graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "../graphql/mutations/LogIn/types";

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  didRequest: false,
};

function App() {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  const [logIn, { error: logInError }] = useMutation<LogInData, LogInVariables>(
    LOG_IN,
    {
      onCompleted: (data) => {
        if (data && data.logIn) {
          setViewer(data.logIn);
        }
      },
    }
  );

  const logInRef = useRef(logIn);

  useEffect(() => {
    logInRef.current();
  }, []);
  //console.log(viewer);

  const logInErrorElement = logInError ? (
    <ErrorNotification
      title="Log in Error"
      message="We weren't able to verify if you were logged in. Please try again later!"
    />
  ) : null;

  return (
    <Router>
      {logInErrorElement}
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} viewer={viewer} setViewer={setViewer} />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} setViewer={setViewer} />}
        />
        <Route
          exact
          path="/user/:id"
          render={(props) => (
            <User {...props} viewer={viewer} setViewer={setViewer} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
