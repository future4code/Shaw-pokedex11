import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";

export const GlobalState = (props) => {

    const [pokedex, setPokedex] = useState([])
    const [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        const urlGetPokemon = 'https://pokeapi.co/api/v2/pokemon/'
        axios
            .get(urlGetPokemon)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const states = { pokedex, pokemonList };
    const setters = { setPokedex, setPokemonList };

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}