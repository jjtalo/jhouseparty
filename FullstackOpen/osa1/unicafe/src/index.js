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

  return (
    <div>
      <h1>Give Feedback</h1>
      <p><Button handleClick={() => setGood(good + 1)} text="Good" /></p>
      <p><Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" /></p>
      <p><Button handleClick={() => setBad(bad + 1)} text="Bad" /></p>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
