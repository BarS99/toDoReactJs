import React, { Component } from "react";
import ToDoList from "./ToDoList";

class Mainboard extends Component {
  state = {
    itemsIdCounter: 2,
    items: [
      { id: 0, text: "Eat breakfast at 7:00 am" },
      { id: 1, text: "Go to work at 7:30 am" },
      { id: 2, text: "Work between 8:00 and 4:00 pm" },
    ],
  };

  addItem = () => {
    const newItem = {};

    const newItemText = prompt("Your new todo element:");
    if (newItemText == null) {
      return;
    } else if (newItemText.length < 3) {
      alert(`Too short! Item not created!`);
      return;
    }

    newItem.text = newItemText;
    newItem.id = this.state.itemsIdCounter + 1;

    this.setState({
      items: [...this.state.items, newItem],
      itemsIdCounter: this.state.itemsIdCounter + 1,
    });
  };

  removeItem = (index) => {
    this.state.items.splice(index, 1);

    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <main className="mainboard">
        <div className="toolbar" id="todo__toolbar">
          <div className="toolbar__item" id="todo__check-all">
            <i className="fas fa-check-square" />
            <span className="caption">Check all</span>
          </div>
          <div className="toolbar__item" id="todo__uncheck-all">
            <i className="far fa-square" />
            <span className="caption">Uncheck all</span>
          </div>
          <div className="toolbar__item" id="todo__remove-all">
            <i className="fas fa-trash" />
            <span className="caption">Remove checked</span>
          </div>
          <div className="toolbar__item" id="todo__complete-all">
            <i className="fas fa-check" />
            <span className="caption">Complete checked</span>
          </div>
        </div>

        <ToDoList items={this.state.items} removeItem={this.removeItem} />

        <div className="mainboard__footer" id="todo__footer">
          <div
            className="toolbar__item"
            id="todo__item-add"
            onClick={this.addItem}
          >
            <i className="fas fa-plus" />
          </div>
        </div>
      </main>
    );
  }
}

export default Mainboard;
