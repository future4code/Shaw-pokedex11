import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage } from "../routes/coordinator.js";
import { Header } from "../styles.js";

const HomePage = () => {

    useEffect(() => {

    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <Header>
                <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
            </Header>

            <p>Home Page</p>
        </div>
    )
}

export default HomePage;