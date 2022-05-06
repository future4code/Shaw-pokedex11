import { useContext } from "react";
import { GlobalContext } from "../global/GlobalContext";

export const useGlobalState = () => {
    return useContext(GlobalContext)
}

export const usePokeList = () => {
    const {states, setters} = useGlobalState()

    return [states.pokemonList, setters.setPokemonList]
}

export const usePokedex = () => {
    const {states, setters} = useGlobalState()

    return [states.pokedex, setters.setPokedex]
}