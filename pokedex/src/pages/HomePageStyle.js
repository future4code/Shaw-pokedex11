import styled from "styled-components";

export const Main = styled.div`
text-align: center;
align-items: center;
justify-content: center;

display: flex;
flex-direction: row;

flex-wrap: wrap;
flex-flow: wrap;

min-width: 100vw;
min-height: 100vh;
`

export const Card = styled.div`
border: 1px solid black;
margin: 20px;

min-width: 12vw ;
max-height: 30vh;

max-width: 12vw;
min-height: 30vh;

flex-direction: column;

background-color: pink;

img {
    width: 100%;
    height: 100%;
}

button {
    width: 50%;
    height: 100%;
}
`