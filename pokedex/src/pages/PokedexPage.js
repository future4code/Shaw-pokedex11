import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokemonDetailPage } from "../routes/coordinator.js";
import { usePokedex } from "../hooks/useGlobalState.js";
import { Header, Title } from "../styles.js";
import logo from "../images/pokedex-logo.png"
import { Card, Main } from "./PokedexPageStyle.js";

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
                <Title>{pokemon.name}</Title>
                <img src={url} />

                <button onClick={() => removeFromPokedex(pokemon.name)}>Tirar da PokeDex</button>
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
                <button onClick={() => goToHomePage(navigate)}>Lista de Pokemons</button>
            </Header>
            <Title><h1>Pokedex</h1></Title>
            <Main>
                {pokedexList}
            </Main>
        </div>
    )
}

export default PokedexPage;