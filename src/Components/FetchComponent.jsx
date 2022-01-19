import React, {useState} from "react";
import DisplayPokemon from "./DisplayPokemon";

import axios from "axios";

const FetchComponent = () => {
    const [pokemon, setPokemon] = useState([])
    const [err, setErr] = useState("")

    const fetchPokemonThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=807`)
            .then(response =>{response.json().then(response =>{
                console.log(response.results)
                setPokemon(response.results)
            })
        })
        
        .catch(err =>{
            setErr("There are some errors")

        })
    }

    const fetchPokemonAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=807`)
            .then(response => {
                console.log(response.data.results)
                setPokemon(response.data.results)
            })
    }

    return (
        <div>
            <button onClick={fetchPokemonThen}>Fetch Pokemon Fetch</button>
            {
                pokemon? 
                (<DisplayPokemon pokemon = {pokemon} />):
                (<h2>Fetch the Pokemon</h2>)
            }
            <button onClick={fetchPokemonAxios}>Fetch Pokemon Axios</button>
        </div>
    );
}

export default FetchComponent;