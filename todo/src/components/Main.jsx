import React, { Component } from "react";

import Header from "./Header";
import NavTabs from "./NavTabs";
import Mainboard from "./Mainboard";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="layout-grid__col layout-grid__main">
      <div className="container container--lg">
        <Header />
        <NavTabs />
        <Mainboard />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
