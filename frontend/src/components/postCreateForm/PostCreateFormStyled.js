import styled from "styled-components";
import { mainColor } from "../../globalStyles";

export const PostCreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  width: 100%;
  min-width: 350px;
  padding: 25px 0;

  & > h1 {
    margin-bottom: 25px;
    color: ${mainColor};
  }

  & > input {
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
  }
`;

export const UploadAndSubmit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    & > input[type="file" i]::-webkit-file-upload-button {
        cursor: pointer;
        align-self: center;
        background-color: white;
        height: 30px;
        border: none;
        border: 2px solid white;
        transition: all ease-in-out 0.25s;

        

        &:hover{
            background-color: lightgray;
            border: 2px solid ${mainColor}
        }
    }

    

    & > button {
        margin-top: 25px;
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
    }
`;
