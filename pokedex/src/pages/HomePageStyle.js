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

@media screen and (max-device-width: 375px){
    width: 100%;
    height: 100%;

    flex-direction: column;

    flex-wrap: wrap;
    flex-grow: initial;
}

@media screen and (max-device-width: 599px){
    width: 100%;
    height: 100%;

    flex-direction: column;

    flex-wrap: wrap;
    flex-grow: initial;
}

@media screen and (max-device-width: 1090px){
    width: 100%;
    height: 100%;

    flex-wrap: wrap;
    flex-grow: initial;
}
`

export const Card = styled.div`
border: 1px solid black;
margin: 20px;

min-width: 13% ;
max-height: 30%;

max-width: 13%;
min-height: 30%;

flex-direction: column;

background-color: pink;

@media screen and (max-device-width: 375px){
    min-width: 60%;
    min-height: 60%;
}

@media screen and (max-device-width: 599px){
    min-width: 60%;
    min-height: 60%;
}

@media screen and (max-device-width: 1090px){
    max-width: 25%;
    max-height: 25%;
}

img {
    width: 100%;
    height: 100%;
}

button {
    min-width: 50%;
    min-height: 100%;

    max-width: 50%;
    max-height: 100%;
}
`