import React, { Component } from "react";
import Aside from "../components/Aside";
import Main from "../components/Main";
import toDoStorage from "../static/scripts/toDoStorage";
import { printList, exportList, importList } from "../static/scripts/aside";

class Layout extends Component {
  constructor() {
    super();

    toDoStorage.initToDoStorage();
    this.storage = new toDoStorage();

    this.state = {
      mainboardKey: 0,
      displayToolbar: true,
      items: this.storage.localStorage.tasks,
      itemsIdCounter: this.storage.localStorage.itemsIdCounter,
    };
  }

  render() {
    return (
      <div className="layout-grid" id="layout-grid">
        <Aside
          printList={printList}
          exportList={exportList}
          importList={() => {
            importList().then(() => {
              this.setState({
                items: this.storage.loadToDoStorage().tasks,
                displayToolbar: true,
                mainboardKey: this.state.mainboardKey + 1,
              });
            });
          }}
        />
        <Main storage={this.state} mainboardKey={this.state.mainboardKey} />
      </div>
    );
  }
}

export default Layout;
