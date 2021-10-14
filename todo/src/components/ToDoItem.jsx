import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo__item">
        <div className="todo__item-content">
          <div className="todo__item-check"></div>
          <div className="todo__item-text">{this.props.item.name}</div>
        </div>
        <div className="todo__item-actions">
          <div className="todo__item-btn todo__item-remove">
            <i className="fas fa-trash"></i>
          </div>
          <div className="todo__item-btn todo__item-complete">
            <i className="fas fa-check"></i>
          </div>
          <div className="todo__item-btn todo__item-move-down">
            <i className="fas fa-arrow-down"></i>
          </div>
          <div className="todo__item-btn todo__item-move-up">
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
