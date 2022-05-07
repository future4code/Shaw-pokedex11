import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage, goToPokemonDetailPage } from "../routes/coordinator.js";
import { usePokeList, usePokedex } from "../hooks/useGlobalState.js";
import logo from "../images/pokedex-logo.png";
import { Header, Title } from "../styles.js";
import { Card, Main } from "./HomePageStyle.js";


const HomePage = () => {

    const [pokemonList, setPokemonList] = usePokeList()
    const [pokedex, setPokedex] = usePokedex()

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


    const onClickAddToPokedex = (pokemon) => {
        const copyPokedex = [...pokedex, pokemon]
        setPokedex(copyPokedex)
    }

    const pokemonsFiltered = pokemonList
        .filter((pokemon) => {
            const isOnPokedex = pokedex.find((pk) => pk.name === pokemon.name)
            return !isOnPokedex
        })


    const pokemons = pokemonsFiltered.map((pokemon) => {
        const id = pokemon.url.split("/")[6]
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <Card key={pokemon.name}>
                <Title>{pokemon.name}</Title>
                <img src={url} />
                <button onClick={() => onClickAddToPokedex(pokemon)}>Por na Pokedex</button>
                <button onClick={() => onClickPokemonDetail(pokemon.name)}>Mostrar Detalhes</button>
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
                <button onClick={() => goToPokeDexPage(navigate)}>Visualizar Pokedex</button>
            </Header>

            <Title><h1>Lista de Pokemons</h1></Title>

            <Main>
                {pokemons}
            </Main>

        </div>
    )
}

export default HomePage;