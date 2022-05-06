import styled from "styled-components";

export const Main = styled.div`
align-items: center;
justify-content: center;

display: flex;
flex-direction: row;

flex-wrap: wrap;

min-width: 100%;
max-width: 100%;

min-height: 90%;
`

export const Status = styled.div`
border: 1px solid black;
margin: 10px;
padding: 10px;
border: 10px solid #5cbd36;
background-color: #ff7400;

min-width: 20%;
min-height: 50vh;

max-width: 20%;
max-height: 50vh;

text-align: center;
flex-direction: column;

`

export const Sprite = styled.div`
border: 1px solid black;
margin: 10px;
padding: 10px;
border: 10px solid #5cbd36;
background-color: #ff7400;

min-width: 25%;
min-height: 70vh;

max-width: 25%;
max-height: 70vh;

text-align: center;
flex-direction: column;

img {
    width: 65%;
    height: 100%;
}
`

export const TypeAndMoves = styled.div`
border: 1px solid black;
margin: 10px;
padding: 10px;
border: 10px solid #5cbd36;
background-color: #ff7400;

min-width: 20%;
min-height: 50vh;

max-width: 20%;
max-height: 50vh;

flex-direction: column;

text-align: center;
`
