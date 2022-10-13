import React, { useState } from 'react'
import { LoginFormButton, LoginFormInput, LoginFormStyled } from './LoginFormStyled'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectStatus } from '../../features/user/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(selectStatus)
  console.log(userStatus);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const {email, password} = formData

  const formOnChangeHandler = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
    setFormData({
      email: "",
      password: ""
    });
  }

  

  return (
    <LoginFormStyled onSubmit={formSubmitHandler}>
      <h1>Login to MEMORIES!</h1>
      <LoginFormInput type="email" id="email" name="email" placeholder='Email' value={email} onChange={formOnChangeHandler}/>
      <LoginFormInput type="password" id="password" name="password" placeholder='Password' value={password} onChange={formOnChangeHandler}/>
      <LoginFormButton type="submit" >LOGIN</LoginFormButton>
      <p>Don't have acc? <span onClick={() => navigate("/register")}>Register</span></p>
    </LoginFormStyled>
  )
}

export default LoginForm