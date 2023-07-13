import { useEffect, useState } from "react";
import { drums } from "../assets/drumsData.js";

type drums = {
  key: string;
  song: string;
  url: string;
};

export const DrumMachine = () => {
  const [drumPlayed, setDrumPlayed] = useState("...");
  const [record, setRecord] = useState(false);
  const [recordBeat, setRecordBeat] = useState("");
  const [play, setPlay] = useState(false)

  useEffect(() => {
    document.addEventListener("keydown", detectKeyPressed, true);
  }, []);

  const detectKeyPressed = (e: KeyboardEvent<HTMLDivElement>) => {
    drums.find((element: drums) => {
      if (element.key !== e.key.toUpperCase()) {
        return;
      } else if (element.key === e.key.toUpperCase()) {
        const button = document.getElementById(element.key);
        setDrumPlayed(element.key);
        button?.click();
        button?.focus();
      }
    });
  };

  function handleRecordClick() {
    setRecord(!record)
    console.log(record)
  }
  function handlePlayClick() {
    setPlay(!play)
    console.log(play)
  }

  return (
    <>
      <div className="pad-bank">
        {drums.map((drum: drums) => {
          return (
            <button
              className="drum-pad"
              id={drum.song}
              key={drum.key}
              onClick={() => {
                document.getElementById(drum.key)?.play();
                setDrumPlayed(drum.key);
              }}
              onKeyDown={detectKeyPressed}
            >
              <audio className="clip" id={drum.key} src={drum.url}></audio>
              <p className="key-btn">{drum.key}</p>
            </button>
          );
        })}
      </div>
      <div id="display">
        <p>ON // OFF</p>
        <p>volume, tempo, pitch knob</p>
        <p>
          <button className="key-btn control-btn" onClick={handleRecordClick}>{record ? 'RECORDING...' : 'REC'} </button>
          <button className="key-btn control-btn" onClick={handlePlayClick}>{play ? 'PLAYING...' : 'PLAY'}</button>
           
          
        </p>
        <p>[ Recorded beats... ]</p>
        <p>Drum played: {drumPlayed}</p>
      </div>
    </>
  );
};
