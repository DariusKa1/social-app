import styled from "styled-components"
import { Link } from "react-router-dom"
import { mainColor } from "../../globalStyles"

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    height: 100px;
    background-color: lightgray;
    color: ${mainColor};

    & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 300px;
    }

    & > h1 {
            cursor: pointer;
        }
`

export const Page = styled(Link)`
    font-size: large;
    font-weight: bold;
    text-decoration: none;
    color: ${mainColor};
    transition: all ease-in-out 0.25s;

    &:hover {
        color: white;
    }
`


