import "./App.css";
import { DrumMachine } from "./components/DrumMachine";

function App() {

  return (
    <>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
      <DrumMachine />
        <div id="display">
          <p>display sound...</p>
        </div>
      </div>
    </>
  );
}

export default App;
