// import React, { useState } from "react";
// import { GlobalContext } from "./GlobalContext";
// import axios from "axios";

// export const GlobalState = (props) => {

//     const [pokedex, setPokedex] = useState([])
//     const [pokemonList, setPokemonList] = useState([])
//     const [pokemon, setPokemon] = useState({ sprites: {}, stats: [], types: [], moves: [] })


//     const getPokemonDetail = () => {
//         const urlDetailPokemon = 'https://pokeapi.co/api/v2/pokemon/:name/'
//         axios
//             .get(urlDetailPokemon)
//             .then((response) => {
//                 console.log(response.data)
//                 // console.log(response.data.types)
//                 // console.log(response.data.stats)
//                 // console.log(response.data.moves)
//                 // console.log(response.data.sprites)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     const getPokemon = () => {
//         const urlGetPokemon = 'https://pokeapi.co/api/v2/pokemon/'
//         axios
//             .get(urlGetPokemon)
//             .then((response) => {
//                 console.log(response)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     const states = { pokemon, pokedex, pokemonList };
//     const setters = { setPokemon, setPokedex, setPokemonList };

//     return (
//         <GlobalContext.Provider value={{ states, setters }}>
//             {props.children}
//         </GlobalContext.Provider>
//     )
// }