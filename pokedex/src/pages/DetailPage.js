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

    return (
        <div>
            <p>Detail Page</p>
            <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
        </div>
    )
}

export default DetailPage;