import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokeDexPage, goToHomePage } from "../routes/coordinator.js";
import logo from "../images/pokedex-logo.png"
import { Main, Status, Sprite, TypeAndMoves } from "./DetailPageStyle.js";
import { Header, Title } from "../styles.js";


const DetailPage = () => {

    const [pokemon, setPokemon] = useState({ sprites: {}, stats: [], types: [], moves: [] })

    const navigate = useNavigate()


    const { id } = useParams()

    useEffect(() => {
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

            <Header>
                <button onClick={() => goToHomePage(navigate)}>Lista de Pokemons</button>
                <img src={logo} alt="pokedex logo" />
                <button onClick={() => goToPokeDexPage(navigate)}>Visualizar Pokedex</button>
            </Header>

            <Title><h1>Detalhes</h1></Title>

            <Main>
                <Status>
                    <h2><b>Stats:</b></h2>
                    {fetchPokemonStatus}
                </Status>

                <Sprite>
                    <img src={pokemon.sprites.front_default} alt="pokemon de frente" />
                    <img src={pokemon.sprites.back_default} alt="pokemon de costas" />
                </Sprite>

                <TypeAndMoves>
                    <h2><b>Tipo:</b></h2>
                    {fetchPokemonTypes}

                    <h2><b>Moves:</b></h2>
                    {fetchPokemonMoves}
                </TypeAndMoves>
            </Main>

        </div>
    )
}

export default DetailPage;