import './App.css';

function Tom(props){
  console.log(props)
  return (
    <div>
      {props.title}
    </div>
  )
}
function App() {
  return (
    <div className="App">
      hello
      <Tom title='apple'/>
      <Tom title='华为'/>
    </div>
  );
}

export default App;
