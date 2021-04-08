import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Routes from './src/Navigation/Routes'
import FlashMessage from "react-native-flash-message";

import { clearUserData, getUserData } from './src/utils/utils';
import store from './src/redux/store';
import { connect , Provider } from 'react-redux';
import types from './src/redux/types';
import SplashScreen from 'react-native-splash-screen';


const { dispatch } = store;
export default class App extends Component {
  componentDidMount() {
    getUserData().then((userData) => {
      if (userData) {
        
        dispatch({
          type: types.OTP_VERIFY,
          payload: userData 
        })
        SplashScreen.hide();
      }
      else{SplashScreen.hide();}
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


// import React,{Component} from 'react';
// import {View, Text} from 'react-native';

// export default class App extends Component{
// render(){
//   return(
//     <View>
//       <Text>sndcmbjdsjcgh</Text>
//       </View>
//   )
// }
// }