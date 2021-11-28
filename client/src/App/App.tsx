import React, { createContext, useState, useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cat, Home, Login, NotFound, Settings, User } from "../sections";
import { ErrorNotification, AppHeaderSkeleton } from "../components";
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

          if (data.logIn.token) {
            sessionStorage.setItem("token", data.logIn.token);
          } else {
            sessionStorage.removeItem("token");
          }
        }
      },
    }
  );

  const logInRef = useRef(logIn);

  useEffect(() => {
    logInRef.current();
  }, []);
  //console.log(viewer);

  if (!viewer.didRequest && !logInError) {
    return (
      <div>
        <AppHeaderSkeleton />
        <div
          className="flex flex-col justify-center items-center min-h-full"
          style={{ height: "100vh" }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="spinner"
            className="animate-spin svg-inline--fa fa-spinner fa-w-16 w-12 h-12 text-purple-300"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
            ></path>
          </svg>
          <span className="text-2xl text-gray-400">Logging in...</span>
        </div>
      </div>
    );
  }

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
        <Route
          exact
          path="/user/:id/settings"
          render={(props) => (
            <Settings {...props} viewer={viewer} setViewer={setViewer} />
          )}
        />
        <Route
          exact
          path="/cat/:id"
          render={(props) => (
            <Cat {...props} viewer={viewer} setViewer={setViewer} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
