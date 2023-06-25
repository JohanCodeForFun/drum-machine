import { useEffect } from "react";
import { drums } from "../assets/drumsData.js";

type drums = {
  key: string;
  song: string;
  url: string;
};

export const DrumMachine = () => {
  // function handleClick(key, song) {
  //   return () => {
  //     document.getElementById(key)?.play()
  //   }
  // }

  useEffect(() => {
    document.addEventListener("keydown", detectKeyPressed, true);
  }, []);

  const detectKeyPressed = (e: KeyboardEvent<HTMLDivElement>) => {
    drums.find((element: drums) => {
      if (element.key !== e.key.toUpperCase()) {
        return;
      } else if (element.key === e.key.toUpperCase()) {
        const button = document.getElementById(element.key);
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
            <div
              className="drum-pad"
              id={drum.song}
              key={drum.key}
              onClick={() => document.getElementById(drum.key)?.play()}
              onKeyDown={detectKeyPressed}
            >
              <audio className="clip" id={drum.key} src={drum.url}></audio>
              {drum.key}
            </div>
          );
        })}
      </div>
    </>
  );
};
