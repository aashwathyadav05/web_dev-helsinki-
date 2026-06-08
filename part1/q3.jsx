const Header = (props) => {
  return <h1>{props.Course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.Name} {props.Ex}
      </p>
    </>
  );
};

const Total=(props)=>
{
  return(
    <>
    <p>Number of exercises {props.tot}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header Course={course} />
      <Content Name={part1.name} Ex={part1.exercises}/>
      <Content Name={part2.name} Ex={part2.exercises}/>
      <Content Name={part3.name} Ex={part3.exercises}/>
      
      <Total tot={part1.exercises + part2.exercises + part3.exercises}/>

    </div>
  );
};

export default App
