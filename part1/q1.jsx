const Header=(props)=>
{
  return(
    <h1>{props.Course}</h1>
  )
}
const Content=(props)=>
{
  return(
    <div>
    <p> {props.Part1} {props.Exercises1} </p>
    <p> {props.Part2} {props.Exercises2} </p>
    <p> {props.Part3} {props.Exercises3} </p>
    </div>
  )
}
const Total=(props)=>{
  return(
  <p>Number of exercises {props.tot}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header Course= {course} />
      <Content Part1={part1} Exercises1={exercises1} Part2={part2} Exercises2={exercises2} Part3={part3} Exercises3={exercises3}/>
      <Total tot={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
