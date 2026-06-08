const Header = (props) => {
  return <h1>{props.Course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.Parts[0].name} {props.Parts[0].exercises}
      </p>
      <p>
        {props.Parts[1].name} {props.Parts[1].exercises}
      </p>
      <p>
        {props.Parts[2].name} {props.Parts[2].exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {props.Parts[0].exercises +
          props.Parts[1].exercises +
          props.Parts[2].exercises}
      </p>
    </>
  );
};
const App = () => {
  const course = 'Half Stack application development';
  const parts = [
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
  ];

  return (
    <div>
      <Header Course={course} />
      <Content Parts={parts} />
      <Total Parts={parts} />
    </div>
  );
};

export default App;
