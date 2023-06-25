import { useState, useEffect } from "react";
import "./App.css";
import { DrumMachine } from "./components/DrumMachine";
import drum1 from "./assets/BD_LXR_Valve11_A1.wav";
import hiHat1 from "./assets/HH_LXR_Valve_11.wav";
import clap1 from "./assets/Clap_LXR_Valve_1.wav";
import cyl from "./assets/Tom_LXR_Valve16.wav";
import cyl2 from "./assets/Tom_LXR_Valve24.wav";

const drums = [drum1, hiHat1, clap1, cyl, cyl2];

function App() {
  // use for record drum beat...
  // const [record, setRecord] = useState(0);

  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   play()
  // }, [value])

  function play() {
    new Audio(drum1).play();
  }

  return (
    <>
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div className="pad-bank">
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="Q" src="./assets/HH_LXR_Valve_11.wav"></audio>Q
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="E" src="./assets/HH_LXR_Valve_11.wav"></audio>W
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="E" src="./assets/HH_LXR_Valve_11.wav"></audio>E
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="A" src="./assets/HH_LXR_Valve_11.wav"></audio>A
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="S" src="./assets/HH_LXR_Valve_11.wav"></audio>S
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="D" src="./assets/HH_LXR_Valve_11.wav"></audio>D
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="Z" src="./assets/HH_LXR_Valve_11.wav"></audio>Z
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="X" src="./assets/HH_LXR_Valve_11.wav"></audio>X
          </div>
          <div className="drum-pad" onClick={play}>
            <audio className="clip" id="C" src="./assets/HH_LXR_Valve_11.wav"></audio>C
          </div>

          <div id="display">
            <p>display sound...</p>
          </div>
        </div>
        {/* {drums.map(btn => <button onClick={play(btn)} key={btn}>{btn}</button>)}  */}
        <DrumMachine />
      </div>
    </>
  );
}

export default App;
