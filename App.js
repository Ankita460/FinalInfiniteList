import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Routes from './src/Navigation/Routes'
import FlashMessage from "react-native-flash-message";

import { clearUserData, getUserData } from './src/utils/utils';
import store from './src/redux/store';
import { connect , Provider } from 'react-redux';
import types from './src/redux/types';


const { dispatch } = store;
export default class App extends Component {
  componentDidMount() {
    getUserData().then((userData) => {
      if (userData) {
        
        dispatch({
          type: types.OTP_VERIFY,
          payload: userData 
        })
      }
    })


  }

  render() {
    return (
      <Provider store={store }>
      <Routes/>
      <FlashMessage position="top" />
</Provider>
    )
  }
} 


