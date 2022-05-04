import axios from "axios";
import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage } from "../routes/coordinator.js";

const HomePage = () => {

    useEffect(() =>{
        getPokemon();
    }, [])

    const navigate = useNavigate()

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

    return (
        <div>
            <p>Home Page</p>
            <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
        </div>
    )
}

export default HomePage;