import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }

  const Content = (props) => {
    console.log(props)
    return (
      <>
      <p>{parts[0].name}, Number of exercises: {parts[0].exercises}</p>
      <p>{parts[1].name}, Number of exercises: {parts[1].exercises}</p>
      <p>{parts[2].name}, Number of exercises: {parts[2].exercises}</p>
      </>
    )
  }

  const Total = (props) => {
    console.log(props)
    const sum = parts[0].exercises + parts[1].exercises + parts[2].exercises
    console.log(sum)
    return ( 
    <>
      <p>Total number of exercises: {sum}</p>
    </>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))