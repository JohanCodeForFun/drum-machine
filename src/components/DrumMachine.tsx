import { drums } from "../assets/drumsData.js";

type drums = {
  name: string;
  sound: string;
};

export const DrumMachine = () => {
  function handleClick(input: string) {
    new Audio(input).play();
  }

  return (
    <>
      <div className="pad-bank">
        {drums.map((drum) => {
          return (
            <div className="drum-pad" id={drum.name} key={drum.id}>
              <audio className="clip" id={drum.id} src={drum.sound}></audio>{drum.id}
              <button key={drum.name}>{drum.name}</button>
          </div>
          );
        })}
      </div>
    </>
  );
};
