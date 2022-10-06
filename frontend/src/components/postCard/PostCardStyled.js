import styled from "styled-components"
import { mainColor } from "../../globalStyles"

export const PostCardStyled = styled.section`
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    align-items: center;
    height: 500px;
    width: 350px;
    min-width: 350px;
    margin-bottom: 30px;
    margin-right: 30px;
    color: ${mainColor};
    transition: all ease-in-out 0.25s;

    &:hover {
       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
       scale: 1.05;
    }

    @media (max-width: 880px){
        width: 100%;
        margin-right: 0px;
    }
`

export const CardTop = styled.div`
    color: white;
    display: flex;
    background: linear-gradient(0deg, rgba(209,129,39,0) 0%, rgba(0,0,0,1) 90%), url(${props => props.img });
    background-size: cover;
    flex-direction: row;
    justify-content: space-between;
    width: inherit;
    height: 45%;
    background-color: aqua;

    &:hover {
        background: linear-gradient(0deg, rgba(209,129,39,0) 0%, rgba(0,0,0,1) 300%), url(${props => props.img });
        background-size: cover;
    }
`

export const TopNameDate = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;

    & > h3 {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    & > h5 {
        margin-block-start: 0;
        margin-block-end: 0;
    }
`

export const MoreInfo = styled.span`
    cursor: pointer;
    margin-right: 20px;
    margin-top: 10px;

    & > h3 {
        margin-block-start: 0;
        margin-block-end: 0;
    }
`

export const CardBot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: inherit;
    height: 55%;

    & > h1, p {
        padding: 0px 20px 0 20px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
`

export const BotTags = styled.div`
    display: flex;
    padding: 20px 0 0 20px;

    & > h5 {
        margin-block-start: 0;
        margin-block-end: 0;
    }

`

export const BotActions = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 20px 20px 20px;
    justify-content: space-between;
`

export const LikeButton = styled.div`
    cursor: pointer;
`

export const DeleteButton = styled.div`
    cursor: pointer;
`