import { useEffect, useState } from "react";
import { drums } from "../assets/drumsData.ts";

type drums = {
  key: string;
  song: string;
  url: string;
};

interface KeyboardEvent {
  key: string;
}

export const DrumMachine = () => {
  const [drumPlayed, setDrumPlayed] = useState("...");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressed, true);
  }, []);

  const handleKeyPressed = (e: KeyboardEvent) => {
    drums.find((element: drums) => {
      if (element.key !== e.key.toUpperCase()) {
        return;
      } else if (element.key === e.key.toUpperCase()) {
        const button = document.getElementById(element.key) as HTMLAudioElement;
        setDrumPlayed(element.key);
        button?.click();
        button?.focus();
      }
    });
  };

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
                (document.getElementById(drum.key) as HTMLAudioElement)?.play();
                setDrumPlayed(drum.key);
              }}
              onKeyDown={handleKeyPressed}
            >
              <audio className="clip" id={drum.key} src={drum.url} />
              {drum.key}
            </button>
          );
        })}
      </div>
      <div id="display">
        <p>Drum played: {drumPlayed}</p>
      </div>
    </>
  );
};
