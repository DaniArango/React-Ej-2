import './App.css';
import Person from './components/Person/Person'


function App() {
  return (
    <div className="App">
      <h1>Bienvenid@</h1>
     <Person name = "Daniela" surname = "Arango" age = "29"/>
     <Person name = "Elvia" surname = "Pulgarin" age = "71"/>
     <Person name = "Mariela" surname = "Pulgarin" age = "75"/>
    </div>
  );
}



export default App;
