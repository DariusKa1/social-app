import styled from "styled-components"

export const HomeStyled = styled.section`
    display: flex;
    flex-direction: row;
    padding: 30px 100px;

    @media (max-width: 880px){
        flex-direction: column-reverse;
    }

`
export const HomeMemories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 70%;
    height: 200px;

    @media (max-width: 880px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        width: 100%;
        height: auto;
    }
`
export const HomeForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 30%;
    height: 200px;

    @media (max-width: 880px){
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        width: 100%;
        height: auto;
        margin-bottom: 30px;
    }
`