import React from 'react'
import { useDispatch } from 'react-redux'
import { HeaderStyled, Page } from './HeaderStyled'
import { logoutUser } from "../../features/user/userSlice"

const Header = () => {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logoutUser())
  }
  return (
    <HeaderStyled>
      <h1>MEMORIES</h1>
      <div>
        <Page to="/" onClick={logoutHandler}>LOGOUT</Page>
        <Page to="/">HOME</Page>
        <Page to="/login">LOGIN</Page>
        <Page to="/register">REGISTER</Page>
      </div>
    </HeaderStyled>
  )
}

export default Header