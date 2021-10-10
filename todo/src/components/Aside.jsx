import React, { Component } from "react";

import person from "../static/images/john-smith.jpg";

export default class Aside extends Component {
  render() {
    return (
      <aside className="layout-grid__col layout-grid__aside">
        <div className="layout-grid__toggle">
          <i className="fas fa-arrow-left" />
        </div>
        <figure className="user-profile">
          <picture className="user-profile__image">
            <img src={person} alt="" />
          </picture>
          <figcaption className="user-profile__caption">John Smith</figcaption>
        </figure>
        <nav className="nav-actions">
          <div className="nav-actions__item" id="todo__print">
            <i className="fas fa-print" />
            <span>Print</span>
          </div>
          <div className="nav-actions__item" id="todo__export">
            <i className="fas fa-file-export" />
            <span>Export as JSON</span>
          </div>
          <div className="nav-actions__item" id="todo__import">
            <i className="fas fa-file-import" />
            <span>Import as JSON</span>
          </div>
        </nav>
      </aside>
    );
  }
}
