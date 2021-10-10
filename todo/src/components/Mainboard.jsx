import React, { Component } from "react";

export default class Mainboard extends Component {
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
        <div className="todo" id="todo__list" />
        <div className="mainboard__footer" id="todo__footer">
          <div className="toolbar__item" id="todo__item-add">
            <i className="fas fa-plus" />
          </div>
        </div>
      </main>
    );
  }
}
