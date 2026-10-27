import { useState } from 'react'

const Button = (props) => {
  return <button onClick ={props.onClick}>{props.text}</button>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
      <div>
        <h1>Give feedback!</h1>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleBadClick} text="Bad" />
        <Button onClick={handleNeutralClick} text="Neutral" />

        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
  )
}

export default App
