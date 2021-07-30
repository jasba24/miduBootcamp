import "./App.css";
import Mensaje from "./components/Mensaje";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      <Mensaje color="red" msg="Estamos trabajando" />
      <Mensaje color="blue" msg="En un curso" />
      <Mensaje color="green" msg="De React" />
      <Description />
    </div>
  );
}

export default App;