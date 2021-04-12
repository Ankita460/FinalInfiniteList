import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Chart, UserChatMessage, Home, List, Profile, QrCode, ZoomImage, UserChat } from "../Screens";

// const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();

export default function(){


  return(
    <>
    <Drawer.Navigator initialRouteName={navigationStrings.LIST}>
      
      <Drawer.Screen name={navigationStrings.HOME} component={Home} />
      <Drawer.Screen name={navigationStrings.LIST} component={List} />
      <Drawer.Screen name={navigationStrings.PROFILE} component={Profile} />
      <Drawer.Screen name={navigationStrings.CHART} component={Chart} />
      <Drawer.Screen name={navigationStrings.QRCODE} component={QrCode} />
      <Drawer.Screen name={navigationStrings.IMAGE_ZOOM} component={ZoomImage} />
      <Drawer.Screen name={navigationStrings.USER_CHAT} component={UserChat} />

    </Drawer.Navigator>
  </>
   
  )
}