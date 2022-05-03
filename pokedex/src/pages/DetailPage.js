import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage } from "../routes/coordinator.js";
import { type } from "@testing-library/user-event/dist/type";

const DetailPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        getPokemonDetail()
    }, [])

    const getPokemonDetail = () => {
        const urlDetailPokemon = 'https://pokeapi.co/api/v2/pokemon/:name/'
        axios
        .get(urlDetailPokemon)
        .then((response) => {
            console.log(response.data)
            // console.log(response.data.types)
            // console.log(response.data.stats)
            // console.log(response.data.moves)
            // console.log(response.data.sprites)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <p>Detail Page</p>
            <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
        </div>
    )
}

export default DetailPage;