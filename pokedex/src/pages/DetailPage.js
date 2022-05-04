import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokeDexPage } from "../routes/coordinator.js";

const DetailPage = () => {

    const [pokemon, setPokemon] = useState({sprites: {}, stats: [], types: [], moves: []})
    
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(()=>{
        getPokemonDetail()
    }, [])

    const getPokemonDetail = () => {
        const urlDetailPokemon = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios
        .get(urlDetailPokemon)
        .then((response) => {
            console.log(response.data)
            setPokemon(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const fetchPokemonStatus = pokemon.stats.map((status) => {
        return (
            <div>
                <p><b>{status.stat.name.toUpperCase()}</b>: {status.base_stat}</p>
            </div>
        )
    })

    const fetchPokemonTypes = pokemon.types.map((eachtype) => {
        return (
            <div>
                <p><b>{eachtype.type.name.toUpperCase()}</b></p>
            </div>
        )
    })

    const fetchPokemonMoves = pokemon.moves.slice(77, 81).map((eachmove) => {
        return (
            <div>
                <p><b>{eachmove.move.name.toUpperCase()}</b></p>
            </div>
        )
    })

    return (
        <div>
            <h1>Detail Page</h1>
            <div>
                <img src={pokemon.sprites.front_default} alt="pokemon de frente" />
                <img src={pokemon.sprites.back_default} alt="pokemon de costas" />
            </div>

            <div>
                <h2><i>Stats:</i></h2>
                {fetchPokemonStatus}
            </div>

            <div>
                <h2><i>Tipo:</i></h2>
                {fetchPokemonTypes}
            </div>

            <div>
                <h2><i>Moves:</i></h2>
                {fetchPokemonMoves}
            </div>
            <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
        </div>
    )
}

export default DetailPage;