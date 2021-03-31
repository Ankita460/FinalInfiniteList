import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import Loader from './Loader';

function SendOtpButton(props) {
  const { buttonText, onButtonCLick, isvalid} = props;

  return(
  <View>
    <TouchableOpacity
      style={{
        height: 50,
        marginHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
      }}
      onPress={() => onButtonCLick()}>
      

      
      {isvalid ?   <Loader isvalid={true} />    :<Text style={styles.sendOTPText}>{buttonText}</Text>}
    </TouchableOpacity>
  </View>
  )
}


export default SendOtpButton;
const styles = StyleSheet.create({
  sendOTPText: {
    color: colors.buttonText,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 12,
    
  },
});
