import React, { Component } from 'react'
import {connect} from 'react-redux'
import { push } from 'connected-react-router'
import api from 'services/api'
import {GET_USER_INFO,
        GET_POS_SETTINGS} from 'constants/actionTypes'
export class App extends Component {
  getInfoAfterLogin(token){
    //get user info
    let userInfoPromise = api.common.getUserInfo();
    this.props.getUserInfo(userInfoPromise);
    // get posSettings
    let posSettingsPromise = api.common.getPosSettings()
    this.props.getPosSettings(posSettingsPromise)
  }
  async checkAuth(){
    let token = sessionStorage.getItem('jwt')
    // if token doesn't exist, redirect to login
    if(!token) {
      this.props.push('login')
    }
    //if there is a token
    try {
      api.setHeader(token)
      let result = await api.common.getPosSettings()
      if(result.data.pos_enabled === true){
        this.getInfoAfterLogin(token)
        api.setHeader(token)
        this.props.push('sale')
      }
      else{
        // if pos_enabled === false, redirect to login
        this.props.push('login')
      }
    } catch (error) {
      //if the token is invalid, redirect to login
      this.props.push('login')
    }
  }
  componentWillMount(){
    this.checkAuth()
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}
const mapDispatchToProps= dispatch =>{
  return {
    push: (route)=>{
      dispatch(push(route))
    },
    getUserInfo: (payload)=>{
      dispatch({type:GET_USER_INFO,payload})
    },
    getPosSettings: (payload) => {
      dispatch({type:GET_POS_SETTINGS,payload})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
