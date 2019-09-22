import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)


const App = () => {
  // tallenna napit omaan tilaansa


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good + bad + neutral)
  const [avg, setAvg] = useState(0)
  
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <p><Button handleClick={() => [setGood(good + 1), setAvg(avg + 1)]} text="Good" /></p>
      <p><Button handleClick={() => [setNeutral(neutral + 1), setAvg(avg + 0)]} text="Neutral" /></p>
      <p><Button handleClick={() => [setBad(bad + 1), setAvg(avg - 1)]} text="Bad" /></p>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Avg {avg/all}</p>
      <p>Positive {(good/all)*100}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
