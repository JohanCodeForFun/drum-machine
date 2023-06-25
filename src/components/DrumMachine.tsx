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

  return (
    <>
      <div className="pad-bank">
        {drums.map((drum: drums) => {
          return (
            <div className="drum-pad" id={drum.song} key={drum.key}
              onClick={() => document.getElementById(drum.key)?.play()}>
              <audio className="clip" id={drum.key} src={drum.url}></audio>{drum.key}
          </div>
          );
        })}
      </div>
    </>
  );
};
