import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile , HomePage , List} from "../Screens/index";
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import { connect } from 'react-redux';




const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  const{themeColor} = props
  return (

    <Tab.Navigator tabBarOptions={{

  }}
  >
   
      <Tab.Screen
        name="List"
        component={List}
        options={{
        tabBarIcon: ({ focused }) => (
          <Image source={imagePath.list}
              style={{width: 25,
                height: 25,
                marginTop: 10,  
            }}
          />
        )}}
        />

      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={imagePath.home}
                style={{width: 25,
                  height: 25,
                  marginTop: 10,  
                }}
            />
          )}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={imagePath.profile}
                style={{width: 25,
                  height: 25,
                  marginTop: 10,  
                }}
     
                  />
          )}}
      />
     
    </Tab.Navigator>
  );
}



export default TabRoutes;
