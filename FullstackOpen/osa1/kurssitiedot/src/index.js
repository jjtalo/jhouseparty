import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const Header = (props) => {
    console.log(props)
    return <h1>{course.name}</h1>
  }

  const Content = (props) => {
    console.log(props)
    return (
      <>
      <p>Course name: {course.parts[0].name}, Number of exercises: {course.parts[0].exercises}</p>
      <p>Course name: {course.parts[1].name}, Number of exercises: {course.parts[1].exercises}</p>
      <p>Course name: {course.parts[2].name}, Number of exercises: {course.parts[2].exercises}</p>
      </>
    )
  }

  const Total = (props) => {
    console.log(props)
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))