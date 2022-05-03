import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToPokeDexPage } from "../routes/coordinator.js";

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Home Page</p>
            <button onClick={() => goToPokeDexPage(navigate)}>Visualizar PokeDex</button>
        </div>
    )
}

export default HomePage;