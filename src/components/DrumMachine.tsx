const buttons = [
  {
    name: "drum1",
    sound: null
  },
  {
    name: "drum2",
    sound: null
  },
  {
    name: "hi-hat",
    sound: null
  },
  {
    name: "snare",
    sound: null
  },
]

export const DrumMachine = () => {
  return (
    <>
    <h1>Druuummms!</h1>
    <div>
      {buttons.map(btn => <button>{btn.name}</button>)}
    </div>
    </>
  )
}