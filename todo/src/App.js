import "./static/stylesheets/vendors/normalize.css";
import "./static/stylesheets/styles.css";

import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    <div className="layout-grid" id="layout-grid">
      <Aside />
      <Main />
    </div>
  );
}

export default App;
