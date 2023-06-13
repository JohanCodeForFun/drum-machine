import { useState } from "react";
import "./App.css";
import { DrumMachine } from "./components/DrumMachine";

function App() {
  // use for record drum beat...
  const [record, setRecord] = useState(0);

  return (
    <>
      <div>
        <h1>Drum Machine</h1>
        <DrumMachine />
      </div>
    </>
  );
}

export default App;
