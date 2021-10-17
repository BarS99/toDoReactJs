export default class toDoStorage {
  constructor() {
    this.localStorage = this.loadToDoStorage();
  }

  static initToDoStorage = (_reset = false) => {
    if (localStorage.getItem("toDoStorage") === null || _reset) {
      const toDoStorage = {};

      toDoStorage.tasks = [];
      toDoStorage.tasksRemoved = [];
      toDoStorage.tasksCompleted = [];
      toDoStorage.itemsIdCounter = 0;

      localStorage.setItem("toDoStorage", JSON.stringify(toDoStorage));
    }
  };

  loadToDoStorage = () => {
    return JSON.parse(localStorage.getItem("toDoStorage"));
  };

  updateToDoStorage = (_storage) => {
    localStorage.setItem("toDoStorage", JSON.stringify(this.localStorage));
  };
}
