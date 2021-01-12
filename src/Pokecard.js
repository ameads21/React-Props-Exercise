import "./styles/Pokecard.css";
const Pokecard = ({ pokemon }) => (
  <div className="container">
    <h1 className="cardName">{pokemon.name}</h1>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      alt={pokemon.name}
    />
    <p>Type: {pokemon.type}</p>
    <p>EXP: {pokemon.base_experience}</p>
  </div>
);

export default Pokecard;
