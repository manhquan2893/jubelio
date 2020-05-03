import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import 'assets/bootstrap.min.css';
import 'react-dropdown/style.css';
import LogoTitle from 'assets/logo-pos.png';
import ImgLeft from 'assets/illustrasi-login-pos_1.png';
import './styled.scss';

import {LOGIN} from 'constants/actionTypes';
import api from 'services/api' 

const Login = (props) => {
  let [validateClientError, setValidateClientError] = useState(null)
  let email = '';
  let password = '';
  const handleChangeEmail = (e)=>{
    email = e.target.value
  }
  const handleChangePassword = (e)=>{
    password = e.target.value
  }
  const onLogin = (email,password)=>{
    setValidateClientError(null)
    if(email === '' || password === ''){
      setValidateClientError('Email or password is not allowed to be empty!')
      return
    }
    props.onLogin(email,password);
  }
  useEffect(() => {
    if(props.isAuthenticated){
      props.push('/sale')
    }
  })
  return (
    <div className="login">
      <div className="login__title">
        <img className="login__title-img" src={LogoTitle} alt="alt" />
      </div>
      <div className="login__content container">
        <div className="login__left col-7">
          <img className="login__left-img" src={ImgLeft} alt="alt" />
        </div>
        <div className="login__right col-5">
          <div className="login__form">
            <h1 className="login__form-title">Sign in to Jubelio POS</h1>
            <div className="login__form-text">Enter your details below.</div>
            <div className="login__form-input">
              <label htmlFor="email">Email</label>
              <input className="login__input" id="email" type="text" autoComplete={false}
              onChange={(e)=>{handleChangeEmail(e)}}/>
            </div>
            <div className="login__form-input">
              <div className="login__form-lable">
                <label htmlFor="password">Password</label>
                <div className="login__form__forgot">Forgot Password?</div>
              </div>
              <input className="login__input" id="password" type="password" 
              onChange={(e)=>{handleChangePassword(e)}}
              />
            </div>
            <div className="login__validateClientError">{validateClientError}</div>
            <div className="login__validateServerError">{props.validateServerError}</div>
            <button className="login__form-button"
            onClick={()=>{onLogin(email,password)}}
            >SIGN IN</button>
            <div className="login__form__create">
              <div className="login__create-title">Dont have account?</div>
              <a href="/" className="login__create-btn">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

const mapStateToProps = state => {
  return {
    validateServerError : state.auth.error,
    isAuthenticated : state.auth.isAuthenticated
  }};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email,password) => {
      const payload = api.auth.login(email,password)
      dispatch({ type: LOGIN, payload})
    },
    push: (route) =>{
      dispatch(push(route))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
