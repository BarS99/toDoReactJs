import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
    return (
      <div className="todo" id="todo__list">
        {this.props.items.map((item, index) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              dataIndex={index}
              itemRemove={this.props.itemRemove}
              itemComplete={this.props.itemComplete}
              itemToggleCheck={this.props.itemToggleCheck}
              itemMoveDown={this.props.itemMoveDown}
              itemMoveUp={this.props.itemMoveUp}
            />
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
