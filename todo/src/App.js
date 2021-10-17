import "./static/stylesheets/vendors/normalize.css";
import "./static/stylesheets/styles.css";

import Aside from "./components/Aside";
import Main from "./components/Main";
import toDoStorage from "./static/scripts/toDoStorage";

function App() {
  return (
    <div className="layout-grid" id="layout-grid">
      <Aside />
      <Main />
    </div>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  toDoStorage.initToDoStorage();
});

export default App;
