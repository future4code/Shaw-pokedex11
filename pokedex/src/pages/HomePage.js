import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage, goToPokemonDetailPage } from "../routes/coordinator.js";
import logo from "../images/pokedex-logo.png";
import { Header, Title } from "../styles.js";
import { Card, Main, Buttons } from "./HomePageStyle.js";


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
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        return (
            <Card>
                <img src={url} />

                <button>Adicionar a PokeDex</button>
                <button onClick={() => onClickPokemonDetail(pokemon.name)}>Ver Mais Detalhes</button>

            </Card>
        )
    })

    const onClickPokemonDetail = (id) => {
        goToPokemonDetailPage(navigate, id)
    }

    return (
        <div>
            <Header>
                <img src={logo} alt="pokedex logo" />
                <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
            </Header>

            <Title><h1>Lista de Pokemons</h1></Title>
            <Main>
                {pokemons}
            </Main>
        </div>
    )
}

export default HomePage;