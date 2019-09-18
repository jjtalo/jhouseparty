import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }

  const Content = (props) => {
    console.log(props)
    return (
      <>
	      <p> {part1.name} {part1.exercises}  </p>
	      <p> {part2.name} {part2.exercises}  </p>
        <p> {part3.name} {part3.exercises}  </p>
      </>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <>
      <p>
        Number of exercises = {part1.exercises + part2.exercises + part3.exercises}
      </p>
      </> 
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total Number of exercises />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))