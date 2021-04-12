import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, Home, List, Search} from '../Screens/index';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import {connect} from 'react-redux';
import navigationStrings from '../constants/navigationStrings';

const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  const {themeColor} = props;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: !!themeColor ? themeColor : colors.themeColor,
      }}>
      <Tab.Screen
        name={navigationStrings.LIST}
        component={List}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.list}
              style={ {
                tintColor: focused
                  ? !!themeColor
                    ? themeColor
                    : colors.themeColor
                  : colors.placeholderText,
                  ...styles.listScreen
              }}
              
            />
          ),
        }}
      />

      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.profile}
              style={{
              
                tintColor: focused
                  ? !!themeColor
                    ? themeColor
                    : colors.themeColor
                  : colors.placeholderText,
                  ...styles.profileScreen
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.search}
              style={{
              
                tintColor: focused
                  ? !!themeColor
                    ? themeColor
                    : colors.themeColor
                  : colors.placeholderText,
                  ...styles.searchScreen
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(TabRoutes);

const styles=StyleSheet.create({
  listScreen:
  {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  profileScreen:{
    width: 25,
    height: 25,
    marginTop: 10,
  },
searchScreen:{
  width: 25,
  height: 25,
  marginTop: 10,
}
})