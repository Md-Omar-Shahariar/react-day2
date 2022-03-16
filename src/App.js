import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
    </div>
  );
}
function Person() {
  return (
    <div className="container">
      <h1>Afridi</h1>
      <p>Profession : Cricketer</p>
    </div>
  );
}
function Friend() {
  return (
    <div className="container">
      <h3>Name: Rigan</h3>
      <p>Job: Maramari</p>
    </div>
  );
}

export default App;
