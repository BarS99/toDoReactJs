import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo__item">
      <div className="todo__item-content">
        <div className="todo__item-check"></div>
        <div className="todo__item-text">{props.item.text}</div>
      </div>
      <div className="todo__item-actions">
        <div
          className="todo__item-btn todo__item-remove"
          onClick={() => {
            props.removeItem(props.dataIndex);
          }}
        >
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
};

export default TodoItem;
