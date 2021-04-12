import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import TabRoutes from "./TabRoutes";
import navigationStrings from "../constants/navigationStrings";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from "./DrawerRoutes";
import { UserChatMessage } from "../Screens";

const Stack=createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function(){


  return(
    <Stack.Navigator>
   <Stack.Screen
      name={navigationStrings.DRAWER_ROUTES}
      options={{ headerShown: false }}
      
      component={DrawerRoutes}
    /> 
     <Stack.Screen
      name={navigationStrings.USER_CHAT_MESSAGE}
      options={{ headerShown: false }}
      
      component={UserChatMessage}
    /> 
  </Stack.Navigator>
    // <>
    // <Stack.Screen
    //   name={navigationStrings.TAB_ROUTES}
    //   options={{ headerShown: false }}
      
    //   component={TabRoutes}
    // />      
    

    
    //   </>
  )
}