import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}