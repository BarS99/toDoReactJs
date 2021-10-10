import React, { Component } from "react";

export default class Navtabs extends Component {
  render() {
    return (
      <nav className="nav-tabs">
        <div className="nav-tabs__item" id="todo__tasks">
          <i className="fas fa-tasks" />
          <span>Tasks</span>
        </div>
        <div className="nav-tabs__item" id="todo__tasks-removed">
          <i className="fas fa-handshake" />
          <span>Removed tasks</span>
        </div>
        <div className="nav-tabs__item" id="todo__tasks-completed">
          <i className="fas fa-handshake" />
          <span>Completed tasks</span>
        </div>
        <div className="nav-tabs__item" id="todo__tasks-reset">
          <i className="fas fa-redo" />
          <span>Reset tasks</span>
        </div>
      </nav>
    );
  }
}
