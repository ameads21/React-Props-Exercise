import "./App.css";
import pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {pokedex.map((p) => (
        <Pokecard pokemon={p} />
      ))}
    </div>
  );
}

export default App;
