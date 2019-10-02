import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = (props) => {
  if (props.all === 0) { 
    return (
      <div>
        There is no feedback yet
      </div>
    )
  
  }

  return (
    <table>
      <tbody>
      <tr>
        <td>Good</td> 
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>Neutral</td> 
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Bad</td> 
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>Avg</td> 
        <td>{props.avg/props.all}</td>
      </tr>
      <tr>
        <td>All</td> 
        <td>{props.all}</td>
      </tr>
      <tr>
        <td>Positive</td> 
        <td>{(props.good/props.all)*100}%</td>
      </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const handleGood = () => {
    setAll(all + 1)
    setAvg(avg + 1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(all + 1)
    setAvg(avg - 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <p><Button onClick={handleGood} text="Good" /></p>
      <p><Button onClick={handleNeutral} text="Neutral" /></p>
      <p><Button onClick={handleBad} text="Bad" /></p>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} all={all} neutral={neutral} avg={avg}  />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
