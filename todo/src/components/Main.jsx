import React, { Component } from "react";

import Header from "./Header";
import Mainboard from "./Mainboard";
import Footer from "./Footer";

class Main extends Component {
  render() {
    return (
      <div className="layout-grid__col layout-grid__main">
        <div className="container container--lg">
          <Header />
          <Mainboard
            storage={this.props.storage}
            key={this.props.mainboardKey}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
