import { useState } from 'react'

const Button = (props) => {
  return <button onClick ={props.onClick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>  
        <td>{props.value}</td>
      </tr>
    )
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  const getAverage = () => {
    if (props.allClicks > 0) {
      return (props.good - props.bad) / props.allClicks;
    }
    else {
      return 0;
    }
  }

  const getPositive = () => {
    if (props.allClicks > 0) {
      return (props.good / props.allClicks) * 100;
    }
    else {
      return 0;
    }
  }
  return (
    <div>
      <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good" value={props.good} />
            <StatisticLine text="Bad" value={props.bad} />
            <StatisticLine text="Neutral" value={props.neutral} />
            <StatisticLine text="All clicks" value={props.allClicks} />
            <StatisticLine text="Average" value={getAverage()} />
            <StatisticLine text="Positive" value={`${getPositive()}%`} />
          </tbody>
        </table>
    </div>
  )

}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const allClicks = good + neutral + bad;

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  }

  return (
      <div>
        <h1>Give feedback!</h1>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleBadClick} text="Bad" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} />
      </div>
  )
}

export default App
