const Header = (props) => {
  return <h1>{props.Course.name}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.Course.parts[0].name} {props.Course.parts[0].exercises}
      </p>
      <p>
        {props.Course.parts[1].name} {props.Course.parts[1].exercises}
      </p>
      <p>
        {props.Course.parts[2].name} {props.Course.parts[2].exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.Course.parts[0].exercises + props.Course.parts[1].exercises + props.Course.parts[2].exercises}
      </p>
    </> 
  );
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header Course={course}/>
      <Content Course={course}/>
      <Total Course={course}/>
    </div>
  );
};

export default App;
