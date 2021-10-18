import React, { useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useApolloClient, useMutation } from "@apollo/client";
import { AUTH_URL } from "../../graphql/queries";
import { AuthUrl as AuthUrlData } from "../../graphql/queries/AuthUrl/types";
import { LOG_IN } from "../../graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "../../graphql/mutations/LogIn/types";
import { Viewer } from "../../lib/types";
import { ErrorNotification, SuccessNotification } from "../../components";
import { displaySuccessNotification } from "../../lib/util";

//Images
import googleLogo from "./assets/google_logo.png";
import catCollage from "./assets/cat_collage.png";
import logo from "../../assets/onlycats_logo.png";
import whiteCatLogo from "./assets/light_cat.png";

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const Login: React.FC<Props> = ({ setViewer }) => {
  const client = useApolloClient();
  const [logIn, { data: LogInData, loading: logInLoading, error: logInError }] =
    useMutation<LogInData, LogInVariables>(LOG_IN, {
      onCompleted: (data) => {
        if (data && data.logIn) {
          setViewer(data.logIn);
          displaySuccessNotification("HOORAY!!!");
        }
      },
    });

  const logInRef = useRef(logIn);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      logInRef.current({
        variables: {
          input: { code },
        },
      });
    }
  }, []);

  const handleAuthorise = async () => {
    try {
      const { data } = await client.query<AuthUrlData>({
        query: AUTH_URL,
      });
      window.location.href = data.authUrl;
    } catch (error) {}
  };

  if (logInLoading) {
    return (
      <div
        className="flex flex-col justify-center items-center min-h-full"
        style={{ height: "100vh" }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="spinner"
          className="animate-spin svg-inline--fa fa-spinner fa-w-16 w-24 h-24 text-purple-300"
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
    );
  }

  if (LogInData && LogInData.logIn) {
    const { id: viewerId } = LogInData.logIn;
    return <Redirect to={`/user/${viewerId}`} />;
  }

  const logInErrorElement = logInError ? (
    <ErrorNotification
      title="Uh Oh!"
      message="Failed to log in. Please try again."
    />
  ) : null;

  return (
    <div>
      {logInErrorElement}
      <div className="flex" style={{ height: "100vh" }}>
        <div className="w-2/3">
          <img
            src={catCollage}
            alt="cat"
            style={{ height: "100vh" }}
            className="w-full"
          />
          <img
            src={whiteCatLogo}
            alt="white cat logo"
            className="absolute top-20 left-60"
          />
        </div>
        <div className="w-1/3 px-5 mt-10">
          <div>
            <img src={logo} alt="OnlyCats logo" className="w-20 h-20" />
          </div>
          <h1 className="text-6xl font-bold mt-16 tracking-wide">
            Welcome to OnlyCats
          </h1>
          <h2 className="mt-20 text-3xl font-extrabold">
            Come join the fluff.
          </h2>
          <div className="mt-24">
            <button
              className="border-1 border-gray-300 px-10 py-2 rounded-full flex items-center hover:bg-gray-200"
              onClick={handleAuthorise}
            >
              <img
                src={googleLogo}
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              <span className="text-gray-800">Continue with Google</span>
            </button>
          </div>
          <div className="mt-24">
            <p className="text-gray-500">
              Note: By signing in, you'll be redirected to the Google consent
              form to sign in with your Google account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
