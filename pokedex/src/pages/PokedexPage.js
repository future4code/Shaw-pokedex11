import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator.js";
import { Header, Title } from "../styles.js";
import logo from "../images/pokedex-logo.png"
import { Card, Main } from "./PokedexPageStyle.js";

const PokedexPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <img src={logo} alt="pokedex logo" />
                <button onClick={() => goToHomePage(navigate)}>Lista de Pokemons</button>
            </Header>

            <Title><h1>Pokedex</h1></Title>

            <Main>
                <Card>
                    <p>Nome Pokemon</p>
                    <p>Imagem Pokemon</p>
                    <button>Adicionar a Pokedex</button>
                    <button>Detalhes</button>
                </Card>
            </Main>
        </div>
    )
}

export default PokedexPage;