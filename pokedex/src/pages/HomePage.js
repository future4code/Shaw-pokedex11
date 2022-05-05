import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage, goToPokemonDetailPage } from "../routes/coordinator.js";
import { Header, Title } from "../styles.js";
import axios from "axios";
import logo from "../images/pokedex-logo.png"
import { Main, Card } from "./HomePageStyle.js";

const HomePage = () => {

    useEffect(() => {
        getPokemon()
    }, [])

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

    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <img src={logo} alt="pokedex logo" />
                <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
            </Header>

            <Title><h1>Lista de Pokemons</h1></Title>

            <Main>
                <Card>
                    <p>Nome Pokemon</p>
                    <p>Imagem Pokemon</p>
                    <button>Adicionar a Pokedex</button>
                    <button onClick={() => goToPokemonDetailPage(navigate)} >Detalhes</button>
                </Card>
            </Main>
        </div>
    )
}

export default HomePage;