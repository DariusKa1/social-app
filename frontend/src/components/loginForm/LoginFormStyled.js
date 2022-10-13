import styled from "styled-components";
import { mainColor } from "../../globalStyles";

export const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    width: 400px;
    min-width: 350px;
    padding: 25px 0;

    & > h1 {
        margin-bottom: 25px;
        color: ${mainColor};
    }

    & > p {
        padding: 25px 0;
        color: ${mainColor};
        cursor: context-menu;
        & > span {
            cursor: pointer;
            font-weight: 500;
        }
    }
`

export const LoginFormInput = styled.input`
    width: 80%;
    height: 25px;
    margin-bottom: 25px;
    background-color: white;
    color: ${mainColor};
    border: 2px solid white;
    transition: all ease-in-out 0.25s;

    &:hover:enabled{
        background-color: lightgray;
        border: 2px solid ${mainColor}
    }

    &:focus{
        border: 2px solid ${mainColor};
        outline: none;
        background-color: lightgray;
    }
`

export const LoginFormButton = styled.button`
    cursor: pointer;
    width: 80%;
    background-color: whitesmoke;
    height: 30px;
    border: none;
    border: 2px solid whitesmoke;
    transition: all ease-in-out 0.25s;

    &:hover:enabled{
        background-color: lightgray;
        border: 2px solid ${mainColor}
    }
`