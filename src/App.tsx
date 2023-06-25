import { useState, useEffect } from "react";
import "./App.css";
import { DrumMachine } from "./components/DrumMachine";
import drum1 from "./assets/BD_LXR_Valve11_A1.wav"
import hiHat1 from "./assets/HH_LXR_Valve_11.wav"
import clap1 from "./assets/Clap_LXR_Valve_1.wav"
import cyl from "./assets/Tom_LXR_Valve16.wav"
import cyl2 from "./assets/Tom_LXR_Valve24.wav"

const drums = [drum1, hiHat1, clap1, cyl, cyl2]

function App() {
  // use for record drum beat...
  // const [record, setRecord] = useState(0);

  const [value, setValue] = useState(0);

  useEffect(() => {
    play()
  }, [value])

  function play(input) {
    new Audio(input).play()
  }

  return (
    <>
      <div>
        <h1>Drum Machine</h1>
        <button onClick={() => setValue(value + 1)}>play drum</button>
        {drums.map(btn => <button onClick={play(btn)} key={btn}>{btn}</button>)} 
        <DrumMachine />
      </div>
    </>
  );
}

export default App;
