import "./App.css";
import DataPanel from "./components/DataPanel";
import InteractPanel from "./components/InteractPanel";

function App() {
  return (
    <div className="App">
      <div className="container">
        <InteractPanel />
        <DataPanel />
      </div>
    </div>
  );
}

export default App;
