import React from "react";
import { bindToggleClass } from "../static/scripts/utilities";

const Header = () => {
  return (
    <header className="header">
      <div className="header__navigation">
        <div className="header__cell">
          <div
            className="header__item header__item-hamburger"
            onClick={() => {
              bindToggleClass("#layout-grid", "layout-grid--show-aside");
            }}
          >
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
};

export default Header;
