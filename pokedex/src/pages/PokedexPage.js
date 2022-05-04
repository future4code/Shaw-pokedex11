import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator.js";
import { Header } from "../styles.js";

const PokedexPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <button onClick={() => goToHomePage(navigate)}>Ir para lista de Pokemon</button>
            </Header>
            <p>PokeDex Page</p>
        </div>
    )
}

export default PokedexPage;