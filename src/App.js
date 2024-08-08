import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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








const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
