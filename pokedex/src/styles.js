import styled from "styled-components";

export const Header = styled.div`
background-color: #5cbd36;

min-width: 100%;
min-height: 10%;

max-width: 100%;
max-height: 10%;

display: flex;
flex-direction: row;

align-items: center;
justify-content: space-between;

button {   
    min-width: 15vw;

    min-height: 10vh;
    max-height: 10vh;

    background-color: #ff7400;

    border: 1px;
    
    border-color: #FFFFFF;

    cursor: pointer;

    font-size: large;

    text-align: center;
    justify-content: center;
    align-items: center;

:active {
    background-color: #000000;
    color: #ff7400;
    border-color: white;
}
}

img {
    min-width: 15vw;

    min-height: 10vh;
    max-height: 10vh;
}
`

export const Title = styled.div`
    text-align: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`