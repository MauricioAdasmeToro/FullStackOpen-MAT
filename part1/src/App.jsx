import { useState } from 'react'

const App = () => {
  const  [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log("Clicked");
  };



  return (
      <div>
        <div>{counter}</div>
        <button onClick={handleClick}>plus</button>
      </div>
  )
}

export default App
