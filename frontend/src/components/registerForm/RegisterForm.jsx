import React, { useState } from 'react'
import { RegisterFormButton, RegisterFormInput, RegisterFormStyled } from './RegisterFormStyled'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { registerUser, reset } from '../../features/user/userSlice';
const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    confirmPassword: "",
    email: ""
  });
  const {fullName, password, confirmPassword, email} = formData;

  const formOnChangeHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser({
      fullName,
      password,
      email
    }))
    setFormData({
      fullName: "",
      password: "",
      confirmPassword: "",
      email: ""
    })
    dispatch(reset());
  }

  const subitIsActive = Boolean(fullName) && Boolean(password) && Boolean(confirmPassword) && Boolean(email);
  return (
    <RegisterFormStyled onSubmit={formSubmitHandler}>
      <h1>Register to MEMORIES!</h1>
      <RegisterFormInput type="text" id="fullName" name="fullName" placeholder='Fullname' value={fullName} onChange={formOnChangeHandler}/>
      <RegisterFormInput type="password" id="password" name="password" placeholder='Password' value={password} onChange={formOnChangeHandler}/>
      <RegisterFormInput type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirm password' value={confirmPassword} onChange={formOnChangeHandler}/>
      <RegisterFormInput type="email" id="email" name="email" placeholder='Email' value={email} onChange={formOnChangeHandler}/>
      <RegisterFormButton disabled={!subitIsActive} type="submit" >REGISTER</RegisterFormButton>
      <p>Have MEMORIES acc? <span onClick={() => navigate("/login")}>Login</span></p>
    </RegisterFormStyled>
  )
}

export default RegisterForm