import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
    return (
      <div className="todo" id="todo__list">
        {this.generateItems()}
      </div>
    );
  }

  generateItems = () => {
    if (this.props.items.length) {
      return this.props.items.map((item, index) => {
        return (
          <ToDoItem
            key={item.id}
            item={item}
            displayToolbar={this.props.displayToolbar}
            dataIndex={index}
            itemRemove={this.props.itemRemove}
            itemComplete={this.props.itemComplete}
            itemToggleCheck={this.props.itemToggleCheck}
            itemMoveDown={this.props.itemMoveDown}
            itemMoveUp={this.props.itemMoveUp}
          />
        );
      });
    } else {
      return <div className="message">Lista jest pusta!</div>;
    }
  };
}

export default ToDoList;
