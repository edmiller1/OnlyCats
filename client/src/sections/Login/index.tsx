import React, { useEffect } from "react";
import googleLogo from "./assets/google_logo.png";
import catCollage from "./assets/cat_collage.png";
import logo from "../../assets/onlycats_logo.png";
import whiteCatLogo from "./assets/purple_cat.png";
import { useApolloClient, useMutation } from "@apollo/client";
import { Viewer } from "../../lib/types";
import { AUTH_URL } from "../../graphql/queries";
import { AuthUrl as AuthUrlData } from "../../graphql/queries/AuthUrl/types";
import { LOG_IN } from "../../graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "../../graphql/mutations/LogIn/types";

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const Login: React.FC<Props> = ({ setViewer }) => {
  const client = useApolloClient();

  const [login, { data: logInData, loading: logInLoading, error: logInError }] =
    useMutation<LogInData, LogInVariables>(LOG_IN);

  const handleAuthorisation = async () => {
    try {
      const { data } = await client.query<AuthUrlData>({
        query: AUTH_URL,
      });
      window.location.href = data.authUrl;
    } catch (error) {}
  };

  return (
    <div>
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
              onClick={handleAuthorisation}
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
