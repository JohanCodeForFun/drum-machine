import {drums} from "../assets/drumsData.js"

type drums = {
  name: string,
  sound: string
}

export const DrumMachine = () => {

  function handleClick(input: string) {
    new Audio(input).play()
  }

// const drumButtons = drums.map(drum => <button onClick={handleClick(drum.sound)} key={drum.name}>{drum.name}</button>)
 
  return (
    <>
      <h1>Druuummms!</h1>
      <div>
        {/* {drumButtons} */}
        {/* {drums.map(btn => <button>{btn.name}</button>)} */}
      </div>
    </>
  )
}