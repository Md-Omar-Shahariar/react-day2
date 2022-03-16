import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Person name="Rigan"></Person>
      <Person name="Afridi"></Person>
      <Friend name="Akram"></Friend>
    </div>
  );
}
function Person(props) {
  return (
    <div className="container">
      <h1>Name : {props.name}</h1>
      <p>Profession : Cricketer</p>
    </div>
  );
}
function Friend(props) {
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <p>Job: Maramari</p>
    </div>
  );
}

export default App;
