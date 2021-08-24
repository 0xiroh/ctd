import ClassComponent from "../components/ClassComponent";
import FunctionComponent from "../components/FunctionComponent";
import "../styles/App.css"



function App() {
  return (
    <div className="App">
      <h3>Invitados:</h3>
      <ClassComponent nombre="Nicolás" estaEnLista={true} />
      <ClassComponent nombre="Iván" estaEnLista={false} />
      <ClassComponent nombre="Carolina" estaEnLista={true} />
      <h3>Tareas:</h3>
      <FunctionComponent nombre="Nicolás" tarea="papas fritas" />
      <FunctionComponent nombre="Iván" tarea="pizza" />
      <FunctionComponent nombre="Carolina" tarea="bebidas" />
    </div>
  );
}

export default App;
