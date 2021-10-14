import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  state = {
    items: [
      { id: 0, name: "Eat breakfast at 7:00 am" },
      { id: 1, name: "Go to work at 7:30 am" },
      { id: 2, name: "Work between 8:00 and 4:00 pm" },
    ],
  };

  render() {
    return (
      <div className="todo" id="todo__list">
        {this.state.items.map((item) => {
          return <ToDoItem key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default ToDoList;
