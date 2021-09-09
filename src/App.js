import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeNames from "./components/pokemonNames";
function App() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                setPokemon(response.data);
            });
    }, []);

    console.log(pokemon);
    return (
        <div className="App">
            <PokeNames allPokemon={pokemon} />
        </div>
    );
}

export default App;
