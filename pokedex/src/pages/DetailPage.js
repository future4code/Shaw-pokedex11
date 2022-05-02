import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToListTripPage, goToLogin } from "../routes/coordinator.js";

const DetailPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Detail Page</p>
            <button>Voltar</button>
            <button>Ir para PokeDex</button>
        </div>
    )
}

export default DetailPage;