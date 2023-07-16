import "./App.scss";
import { DrumMachine } from "./components/DrumMachine";

function App() {

  return (
    <>
      <h1 className="title">Drum Machine</h1>
      <div id="drum-machine">
      <DrumMachine />
      </div>
    </>
  );
}

export default App;
