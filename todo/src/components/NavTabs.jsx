import React from "react";

const Navtabs = (props) => {
  return (
    <nav className="nav-tabs">
      <div
        className="nav-tabs__item"
        id="todo__tasks"
        onClick={props.itemDisplayTasks}
      >
        <i className="fas fa-tasks" />
        <span>Tasks</span>
      </div>
      <div
        className="nav-tabs__item"
        id="todo__tasks-removed"
        onClick={props.itemDisplayRemoved}
      >
        <i className="fas fa-handshake" />
        <span>Removed tasks</span>
      </div>
      <div
        className="nav-tabs__item"
        id="todo__tasks-completed"
        onClick={props.itemDisplayCompleted}
      >
        <i className="fas fa-handshake" />
        <span>Completed tasks</span>
      </div>
      <div
        className="nav-tabs__item"
        id="todo__tasks-reset"
        onClick={props.itemReset}
      >
        <i className="fas fa-redo" />
        <span>Reset tasks</span>
      </div>
    </nav>
  );
};

export default Navtabs;
