import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import actions from '../../redux/actions';
import {showMessage, hideMessage} from 'react-native-flash-message';
import OTPTextView from 'react-native-otp-textinput';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import ButtonComponent from '../../Component/ButtonComponent';
import imagePath from '../../constants/imagePath';
export default class OtpVerification extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    inputText: '',
    isvalid: '',
  };
  checkData = () => {
    const {userId} = this.props.route.params;
    const {otpInput} = this.state;

    this.setState({
      isvalid: true,
    });

    actions
      .OTPVerify({userId, otp: otpInput, deviceToken: '123'})
      .then(response => {
        console.log(response, '   verify');
        this.setState({isvalid: false});
        showMessage({
          type: 'success',
          message: 'OTP verified ',
        });
      })
      .catch(error => {
        this.setState({isvalid: false}),
          showMessage({
            type: 'danger',
            message: 'Login failed ',
          });

        console.log(error);
      });
  };

  render() {
    const {isvalid} = this.state;
    const {phoneNumber} = this.props.route.params;
    return (
      <View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            {strings.ENTER_VERIFICATION_CODE}
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.sentCode}>
            {strings.WE_HAVE_SENT_A_VERIFICATION_CODE}
          </Text>
          <Text style={styles.phone}>{phoneNumber}
            {strings.WE_HAVE_SEND_THE_OTP_ON_YOU_WILL_APPLY_TO_THE_FIELD}
            
          </Text>
        </View>
        <View>
          <View style={styles.container}>
            <OTPTextView
              ref={e => (this.input1 = e)}
              containerStyle={styles.textInputContainer}
              textInputStyle={[styles.roundedTextInput]}
              handleTextChange={text => this.setState({otpInput: text})}
              inputCount={5}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View>
          <View style={styles.resend}>
            <Text style={styles.footer1}>{strings.DONT_RECEIVE_THE_CODE}</Text>
            <Text style={styles.Resend}>{strings.RESEND}</Text>
          </View>
          <ButtonComponent
            buttonText={strings.GO_TO_HOMEPAGE}
            onButtonCLick={() => this.checkData()}
            isvalid={isvalid}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 60,
  },
  sentCode: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 25,
  },
  phone: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
    color: colors.placeholderText,
    marginHorizontal: 10,
  },
  footer1: {
    marginHorizontal: 80,
    marginVertical: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  Resend: {
    color: colors.themeColor,
    marginVertical: 5,
    marginHorizontal: -75,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  resend: {flexDirection: 'row'},
  roundedTextInput: {
    borderBottomWidth: 2,
    borderBottomColor: colors.themeColor,
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: colors.themeColor,
  },
  headerText: {
    marginVertical: 5,
    fontSize: 25,
    color: colors.buttonText,
    marginHorizontal: 75,
  },
});
