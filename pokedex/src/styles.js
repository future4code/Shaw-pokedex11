import styled from "styled-components";

export const Header = styled.div`

background-color: #5cbd36;

min-width: 100vw;
min-height: 10vh;

max-width: 100vw;
max-height: 10vh;

display: flex;
flex-direction: row;

align-items: center;
justify-content: space-between;

button {

    /* min-width: 15vw; */
    
    max-height: 8vh;

    background-color: #ff7400;

    
    padding: 15px;
    margin: 20px;
    border: 1px;
    
    border-color: #FFFFFF;

    cursor: pointer;

    font-size: large;

    text-align: center;
    justify-content: center;

:hover {
    transform: scale(1.03);

    /* background-color: #000000;
    color: #ff7400;
    border-color: white; */
}

:active {
    background-color: #000000;
    color: #ff7400;
    border-color: white;
}

}

img {

    min-width: 15vw;

    max-height: 10vh;

}
`

export const Title = styled.div`
    text-align: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`
