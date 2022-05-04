import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage, goToPokemonDetailPage } from "../routes/coordinator.js";
import { Header } from "../styles.js";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid black;
    margin: 50px;
    padding: 20px;
`

const HomePage = () => {

    const [pokemonList, setPokemonList] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllPokemons()
    }, [])

    const getAllPokemons = () => {
        const urlAllPokemons = 'https://pokeapi.co/api/v2/pokemon/'
        axios
        .get(urlAllPokemons)
        .then((response) => {
            setPokemonList(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const pokemons = pokemonList.map((pokemon, index) => {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        return (
            <Card>
                <img src={url}/>
                <button>Adicionar a PokeDex</button>
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
                <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
            </Header>

            <p>Home Page</p>
            <div>
                {pokemons}
            </div>
        </div>
    )
}

export default HomePage;