import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__navigation">
          <div className="header__cell">
            <div className="header__item header__item-hamburger">
              <i className="fas fa-bars" />
            </div>
          </div>
          <div className="header__cell">
            <div className="header__item">
              <div className="header__item-text">ToDo List 2021</div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
