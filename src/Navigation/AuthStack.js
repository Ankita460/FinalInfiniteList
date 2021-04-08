import React, { Fragment } from 'react';
import { Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import { Login, OtpVerification} from '../Screens/index';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Fragment>
       <Stack.Navigator>
       
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.OTP_VERIFICATION} component={OtpVerification} />

      
      </Stack.Navigator>

    </Fragment>
  );
}

export default AuthStack;