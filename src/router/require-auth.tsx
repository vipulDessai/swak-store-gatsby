import React, { useState, FC, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { useInit } from "../hooks/useInit";
import { ROOT_STORE_TYPE } from "../reducer";
import { UnauthorizedPage } from "./unauthorized-page";
import { setAuthData } from "../reducer/authentication.slice";
import { LazyLoaderComponent } from "../components/loader/default";

interface REQUIRE_AUTH_TYPE {
  children: ReactNode;
}

export const RequireAuth: FC<REQUIRE_AUTH_TYPE> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const authUserData = useSelector(
    (state: ROOT_STORE_TYPE) => state.auth.userAuthData,
  );
  const [isLoading, setIsLoading] = useState(true);

  // TODO: check if the error is coz of unauthentication
  // and if so then redirect, this can be used on action such as button click etc
  const navigate = useNavigate();

  useInit(async () => {
    setIsLoading(true);
    try {
      // TODO: setup authentication

      dispatch(
        setAuthData({
          success: true,
          data: {},
        }),
      );
    } catch (error) {
      let message = "Something went wrong";

      if (error instanceof Error) {
        message = error.message;
      }

      dispatch(
        setAuthData({
          success: false,
          data: message,
        }),
      );

      // TODO: check if the error is coz of unauthentication
      // and if so then redirect
      // navigate("/unauthorized");
    }
    setIsLoading(false);
  });

  return <section>
    fix the issue
  </section>

  // if (isLoading) {
  //   return LazyLoaderComponent();
  // } else {
  //   if (authUserData.success) {
  //     return children; // Render the protected component if authenticated
  //   } else {
  //     return UnauthorizedPage;
  //   }
  // }
};
