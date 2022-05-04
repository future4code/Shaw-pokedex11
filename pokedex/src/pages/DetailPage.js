import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage } from "../routes/coordinator.js";
import { type } from "@testing-library/user-event/dist/type";
import { Header } from "../styles.js";

const DetailPage = () => {
    const navigate = useNavigate()

    useEffect(() => {

    }, [])

    return (
        <div>
            <Header>
                <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
            </Header>

            <p>Detail Page</p>
        </div>
    )
}

export default DetailPage;