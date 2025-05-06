import React, { Suspense, StrictMode } from "react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLoaderData,
} from "react-router";

import "./styles/index.css";

import { useInit } from "./hooks/useInit";
import {
  rootloader,
  RoutingErrorPage,
  RequireAuth,
  UnauthorizedPage,
} from "./router";
import { store } from "./reducer";
import ShowSimpleNotification from "./helper/ShowSimpleNotification";
import { LazyLoaderComponent } from "./components/loader/default";

// const App = React.lazy(() => import("./pages/index"));

function Root() {
  // Use the rootLoaderData if common data needs to be fetched
  const rootLoaderData = useLoaderData();

  useInit(() => {});

  return (
    <section className="lapps-ui-react-latest">
      <Outlet />
    </section>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RoutingErrorPage />,
    loader: rootloader,
    children: [
      {
        path: "",
        element: (
          <RequireAuth>
            <Suspense fallback={<LazyLoaderComponent />}>
              <section className="p-0 text-blue-500">Dummy App Test</section>
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        // use UnauthorizedScreen
        path: "unauthorized",
        element: <UnauthorizedPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <ShowSimpleNotification />
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
}
