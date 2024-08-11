import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restramenupage from "./components/Restramenupage";
// import Groccery from "./components/Groccery";

/**
 * Header
 *  -Logo
 *  - nav items
 * body
 *  -search
 *  - RestaurentContainer
 *  -RestaurantCard
 *   --img
 *   --Name of Res ,Star rating , cusine , delievery time
 * footer
 * -copyright
 * -Links
 * -Address
 * -contact
 */
const Groccery = lazy(() => import("./components/Groccery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <Restramenupage />,
      },
      {
        path: "/groccery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Groccery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
