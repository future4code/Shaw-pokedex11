import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage } from "../routes/coordinator.js";

const HomePage = () => {

    useEffect(() =>{

    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <p>Home Page</p>
            <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
        </div>
    )
}

export default HomePage;