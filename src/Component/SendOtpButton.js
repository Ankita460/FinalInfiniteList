import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import Loader from './Loader';
import {connect} from 'react-redux';
function SendOtpButton(props) {
  const {themeColor, buttonText, onButtonCLick, isvalid} = props;

  return(
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: !!themeColor ? themeColor : colors.themeColor,

        height: 55,
        marginHorizontal: 30,
        borderRadius: 35,
        marginTop: 30,
        marginVertical: -15
      }}
      onPress={() => onButtonCLick()}>
      

      
      {isvalid ?   <Loader isvalid={true} />    :<Text style={styles.sendOTPText}>{buttonText}</Text>}
    </TouchableOpacity>
    
  </View>
  )
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(SendOtpButton);
const styles = StyleSheet.create({
  sendOTPText: {
    color: colors.buttonText,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 12,
    // backgroundColor: colors.themeColor,
    borderRadius: 35,
    height: 35
    
  },
  
});
