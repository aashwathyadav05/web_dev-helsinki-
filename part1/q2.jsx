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
    <Part name={props.P1} ex={props.EX1}/>
    <Part name={props.P2} ex={props.EX2}/>
    <Part name={props.P3} ex={props.EX3}/>        
    </div>
  )
}
const Part=(props)=>
{
  return(
  <p>{props.name} {props.ex}</p>
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
      <Content P1={part1} EX1={exercises1} P2={part2} EX2={exercises2} P3={part3} EX3={exercises3}/>
      <Total tot={exercises1+exercises2+exercises3}/>
    </div>
  )
} 

export default App
