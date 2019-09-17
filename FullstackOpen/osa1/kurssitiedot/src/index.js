import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
    <div>
      <h1>
        {course}
      </h1>>
    </div>
    )
  }

  const Content = (props) => {
    return (
      <>
        <h3> 
          {part1} 
        </h3> 
        <p> 
          {exercises1} 
        </p>
        <h3> 
          {part2}
        </h3> 
        <p> 
          {exercises2}
        </p>
        <h3>
          {part3}
        </h3> 
        <p>
          {exercises3}
        </p>
      </>
    )
  }

  const Total = (props) => {
    return (
      <>
      <p>
        Number of exercises = {exercises1 + exercises2 + exercises3}
      </p>
      </> 
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total Number of exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))