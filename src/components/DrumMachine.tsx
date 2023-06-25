import { drums } from "../assets/drumsData.js";

type drums = {
  key: string;
  song: string;
  url: string;
};

export const DrumMachine = () => {
  // function handleClick(input: string) {
  //   // new Audio(input).play();
  //   console.log(input)
  //   return
  // }

  return (
    <>
      <div className="pad-bank">
        {drums.map((drum: drums) => {
          return (
            <div className="drum-pad" id={drum.song} key={drum.key}
            // onClick={() => console.log(drum.sound)}>
              onClick={() => new Audio(drum.url)}>
              <audio className="clip" id={drum.key} src={drum.url} controls></audio>{drum.key}
          </div>
          );
        })}
      </div>
    </>
  );
};
