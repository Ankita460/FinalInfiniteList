import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import SendOtpButton from '../../Component/SendOtpButton';
import strings from '../../constants/lang';
import actions from '../../redux/actions';


export default class Profile extends Component {

render(){
  return(
    <View>
      {/* <Text>LOGOUT</Text> */}
      <SendOtpButton
      buttonText={strings.LOG_OUT}
      onButtonCLick={()=> actions.onLogout()}
      />
    </View>
  )
}
}
