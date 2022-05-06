import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokemonDetailPage, goToPokemonDetailPageFromPokedex } from "../routes/coordinator.js";
import { Header } from "../styles.js";
import { usePokedex } from "../hooks/useGlobalState.js";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid black;
    margin: 50px;
    padding: 20px;
`

const PokedexPage = () => {

const [pokedex, setPokedex] = usePokedex()

    const navigate = useNavigate()

    const removeFromPokedex = (id) => {
        const newPokedex = pokedex.filter((pokemon) => {
            return pokemon.name !== id
        })

        setPokedex(newPokedex)
    }

    const pokedexList = pokedex.map((pokemon) => {
        const id = pokemon.url.split("/")[6]
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <Card key={pokemon.name}>
                <img src={url}/>
                <button onClick={() => removeFromPokedex(pokemon.name)}>Remover da PokeDex</button>
                <button onClick={() => onClickPokemonDetail(pokemon.name)}>Ver Detalhes</button>
            </Card>
        )
    })

    const onClickPokemonDetail = (id) => {
        goToPokemonDetailPage(navigate, id)
    }

    return (
        <div>
            <Header>
                <button onClick={() => goToHomePage(navigate)}>Ir para lista de Pokemon</button>
            </Header>
            <p>PokeDex Page</p>
            <div>
               {pokedexList} 
            </div>
        </div>
    )
}

export default PokedexPage;