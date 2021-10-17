import React, { Component } from "react";
import ToDoList from "./ToDoList";
import { swap } from "../static/scripts/utilities";
import toDoStorage from "../static/scripts/toDoStorage";

class Mainboard extends Component {
  constructor() {
    super();

    this.storage = new toDoStorage();

    this.state = {
      items: this.storage.localStorage.tasks,
      itemsIdCounter: this.storage.localStorage.itemsIdCounter,
    };
  }

  render() {
    return (
      <main className="mainboard">
        <div className="toolbar" id="todo__toolbar">
          <div
            className="toolbar__item"
            id="todo__check-all"
            onClick={this.itemCheckAll}
          >
            <i className="fas fa-check-square" />
            <span className="caption">Check all</span>
          </div>
          <div
            className="toolbar__item"
            id="todo__uncheck-all"
            onClick={this.itemUncheckAll}
          >
            <i className="far fa-square" />
            <span className="caption">Uncheck all</span>
          </div>
          <div
            className="toolbar__item"
            id="todo__remove-all"
            onClick={this.itemRemoveChecked}
          >
            <i className="fas fa-trash" />
            <span className="caption">Remove checked</span>
          </div>
          <div
            className="toolbar__item"
            id="todo__complete-all"
            onClick={this.itemCompleteChecked}
          >
            <i className="fas fa-check" />
            <span className="caption">Complete checked</span>
          </div>
        </div>

        <ToDoList
          items={this.state.items}
          itemRemove={this.itemRemove}
          itemComplete={this.itemComplete}
          itemToggleCheck={this.itemToggleCheck}
          itemMoveDown={this.itemMoveDown}
          itemMoveUp={this.itemMoveUp}
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

    this.setState(
      {
        items: [...this.state.items, newItem],
        itemsIdCounter: this.state.itemsIdCounter + 1,
      },
      () => {
        this.storage.localStorage.tasks = this.state.items;
        this.storage.localStorage.itemsIdCounter = this.state.itemsIdCounter;

        this.storage.updateToDoStorage(this.storage.localStorage);
      }
    );
  };

  itemRemove = (index) => {
    const removedItems = this.state.items.splice(index, 1);

    this.setState({ items: this.state.items }, () => {
      this.storage.localStorage.tasks = this.state.items;
      this.storage.localStorage.tasksRemoved = [
        ...removedItems,
        ...this.storage.localStorage.tasksRemoved,
      ];
      this.storage.localStorage.itemsIdCounter = this.state.itemsIdCounter;

      this.storage.updateToDoStorage(this.storage.localStorage);
    });
  };

  itemComplete = (index) => {
    const completedItems = this.state.items.splice(index, 1);

    this.setState({ items: this.state.items }, () => {
      this.storage.localStorage.tasks = this.state.items;
      this.storage.localStorage.tasksCompleted = [
        ...completedItems,
        ...this.storage.localStorage.tasksCompleted,
      ];
      this.storage.localStorage.itemsIdCounter = this.state.itemsIdCounter;

      this.storage.updateToDoStorage(this.storage.localStorage);
    });
  };

  itemMoveUp = (index) => {
    if (index === 0) return;

    let items = this.state.items;

    swap(items, index, index - 1);

    this.setState({ items: this.state.items }, () => {
      this.storage.localStorage.tasks = this.state.items;
      this.storage.localStorage.itemsIdCounter = this.state.itemsIdCounter;

      this.storage.updateToDoStorage(this.storage.localStorage);
    });
  };

  itemMoveDown = (index) => {
    let items = this.state.items;

    if (index === items.length - 1) return;

    swap(items, index, index + 1);

    this.setState({ items: this.state.items }, () => {
      this.storage.localStorage.tasks = this.state.items;
      this.storage.localStorage.itemsIdCounter = this.state.itemsIdCounter;

      this.storage.updateToDoStorage(this.storage.localStorage);
    });
  };

  itemToggleCheck = (index) => {
    let items = this.state.items;

    items[index].checked = !items[index].checked;

    this.setState({ items: items });
  };

  itemCheckAll = () => {
    let items = this.state.items;

    items.forEach((item) => {
      item.checked = true;
    });

    this.setState({ items: items });
  };

  itemUncheckAll = () => {
    let items = this.state.items;

    items.forEach((item) => {
      item.checked = false;
    });

    this.setState({ items: items });
  };

  itemRemoveChecked = () => {
    let items = this.state.items;

    const removedItems = items.filter((item) => {
      return item.checked;
    });

    items = items.filter((item) => {
      return !item.checked;
    });

    this.setState({ items: items }, () => {
      this.storage.localStorage.tasks = this.state.items;
      this.storage.localStorage.tasksRemoved = [
        ...removedItems,
        ...this.storage.localStorage.tasksRemoved,
      ];
      this.storage.localStorage.itemsIdCounter = this.state.itemsIdCounter;

      this.storage.updateToDoStorage(this.storage.localStorage);
    });
  };

  itemCompleteChecked = () => {
    let items = this.state.items;

    const completedItems = items.filter((item) => {
      return item.checked;
    });

    items = items.filter((item) => {
      return !item.checked;
    });

    this.setState({ items: items }, () => {
      this.storage.localStorage.tasks = this.state.items;
      this.storage.localStorage.tasksCompleted = [
        ...completedItems,
        ...this.storage.localStorage.tasksCompleted,
      ];
      this.storage.localStorage.itemsIdCounter = this.state.itemsIdCounter;

      this.storage.updateToDoStorage(this.storage.localStorage);
    });
  };
}

export default Mainboard;
