import bulbasaurimg from "./images/bulbasaur.jpg";
import "./App.css";

function ShowCase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase component</h1>
      <img
        src={bulbasaurimg}
        alt={favPokemon}
        style={{
          width: "50",
          height: "50",
          borderRadius: "70%",
          objectFit: "cover",
        }}
      />
      <h2>
        {favPokemon}'s type is
        <span className="firstchar"> {pokeCharacteristics.type} </span>
        and one of their moves is
        <span className="secondchar">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default ShowCase;
