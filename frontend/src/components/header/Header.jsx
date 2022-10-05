import React from 'react'
import { HeaderStyled, Page } from './HeaderStyled'

const Header = () => {
  return (
    <HeaderStyled>
      <h1>MEMORIES</h1>
      <div>
        <Page to="/">HOME</Page>
        <Page to="/login">LOGIN</Page>
        <Page to="/register">REGISTER</Page>
      </div>
    </HeaderStyled>
  )
}

export default Header