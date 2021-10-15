import React, { Component } from "react";
import ToDoList from "./ToDoList";

class Mainboard extends Component {
  state = {
    itemsIdCounter: 2,
    items: [
      { id: 0, text: "Eat breakfast at 7:00 am", checked: false },
      { id: 1, text: "Go to work at 7:30 am", checked: false },
      { id: 2, text: "Work between 8:00 and 4:00 pm", checked: false },
    ],
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

        <ToDoList
          items={this.state.items}
          itemRemove={this.itemRemove}
          itemToggleCheck={this.itemToggleCheck}
        />

        <div className="mainboard__footer" id="todo__footer">
          <div
            className="toolbar__item"
            id="todo__item-add"
            onClick={this.itemAdd}
          >
            <i className="fas fa-plus" />
          </div>
        </div>
      </main>
    );
  }

  itemAdd = () => {
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

  itemRemove = (index) => {
    this.state.items.splice(index, 1);

    this.setState({ items: this.state.items });
  };

  itemToggleCheck = (index) => {
    let items = this.state.items;

    items[index].checked = !items[index].checked;

    this.setState({ items: items });
  };
}

export default Mainboard;
