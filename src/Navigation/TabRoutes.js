import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile , HomePage , List, Search} from "../Screens/index";
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import { connect } from 'react-redux';




const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  const{themeColor} = props
  return (
    

    <Tab.Navigator tabBarOptions={{
      activeTintColor: !!themeColor?themeColor:colors.themeColor,

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
                tintColor: focused ? (!!themeColor?themeColor:colors.themeColor) : "gray", 
  
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
                  tintColor: focused ? (!!themeColor?themeColor:colors.themeColor) : "gray", 
                }}
            />
          )}}
      />
      <Tab.Screen
        name="Search"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={imagePath.search}
                style={{width: 25,
                  height: 25,
                  marginTop: 10,  
                  tintColor: focused ? (!!themeColor?themeColor:colors.themeColor) : "gray",
                }}
     
                  />
          )}}
      />
     
    </Tab.Navigator>
  );
}

const mapStateToProps=state=>{
  return {
     
      themeColor:state.auth.themeColor,
  }
}

export default connect(mapStateToProps)(TabRoutes);
