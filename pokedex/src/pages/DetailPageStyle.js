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

@media screen and (max-device-width: 375px){
    flex-direction: column;
    }

@media screen and (max-device-width: 599px){
    flex-direction: column;
    }

@media screen and (max-device-width: 1090px){
    flex-direction: column;
}
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

@media screen and (max-device-width: 375px){
    min-width: 80%;
    min-height: 0%;
    }

@media screen and (max-device-width: 599px){
    min-width: 80%;
    min-height: 40%;
    }

@media screen and (max-device-width: 1090px){
    min-width: 70%;
    min-height: 70%;
}
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

    @media screen and (max-device-width: 375px){
    min-width: 80%;
    min-height: 40%;
    }

@media screen and (max-device-width: 599px){
    min-width: 80%;
    min-height: 40%;
    }

@media screen and (max-device-width: 1090px){
    max-width: 60%;
    max-height: 40%;
}
}

@media screen and (max-device-width: 375px){
    min-width: 80%;
    min-height: 40%;
    }

@media screen and (max-device-width: 599px){
    min-width: 80%;
    min-height: 40%;
    }

@media screen and (max-device-width: 1090px){
    min-width: 70%;
    min-height: 70%;
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

@media screen and (max-device-width: 375px){
    min-width: 80%;
    min-height: 40%;
    }

@media screen and (max-device-width: 599px){
    min-width: 80%;
    min-height: 40%;
    }

@media screen and (max-device-width: 1090px){
    min-width: 70%;
    min-height: 70%;
}
`
