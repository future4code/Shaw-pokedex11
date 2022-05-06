import styled from "styled-components";

export const Main = styled.div`
text-align: center;
align-items: center;
justify-content: center;

display: flex;
flex-direction: row;

flex-wrap: wrap;

min-width: 100%;
max-width: 100%;

min-height: 90%;
`

export const Card = styled.div`
border: 1px solid black;
margin: 20px;

min-width: 12% ;
max-height: 30%;

max-width: 12%;
min-height: 30%;

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