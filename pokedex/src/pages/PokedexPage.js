import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator.js";

const PokedexPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>PokeDex Page</p>
            <button onClick={() => goToHomePage(navigate)}>Ir para lista de Pokemon</button>
        </div>
    )
}

export default PokedexPage;