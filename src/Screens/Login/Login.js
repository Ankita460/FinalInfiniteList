import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';
import InputText from '../../Component/InputText';
import strings from '../../constants/lang';
import ButtonComponent from '../../Component/ButtonComponent';
import {showMessage, hideMessage} from 'react-native-flash-message';
import validations from '../../utils/validations';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import navigationStrings from '../../constants/navigationStrings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();
import fontFamily from '../../styles/fontFamily';

export default function Login (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     phoneNumber: '',
  //    isvalid: '',
  //   };
  // }
 const [state, setState] = useState({
phoneNumber: '',
isvalid: '',
 })
  // setNumber = text => {
  //   this.setState({
  //     phoneNumber: text,
  //   });
  // };
  const updateState = data => setState(prevState => ({...prevState, ...data}));
const setNumber = text=>{
  updateState({phoneNumber: text})
}
 const isValidate = () => {
    const {phoneNumber} = state;
    let errorMessage = validations({phoneNumber: phoneNumber});
    // this.setState({
    //   isvalid: true,
    // });
    updateState({isvalid: true})
    if (errorMessage) {
      // this.setState({isvalid: false});
      updateState({isvalid: false})
      showMessage({
        message: errorMessage,
        icon: 'warning',
        type: 'danger',
      });
      return false;
    }

    return true;
  };

  const checkData = () => {
    const {phoneNumber} = state;
    if (isValidate()) {
      actions
        .loginWithOTP({
          contactDetails: {
            phoneNo: phoneNumber,
            countryCode: '+91',
            countryCodeISO: 'IN',
          },
        })
        .then(response => {
          // this.setState({isvalid: false});
          updateState({isvalid: false})
          props.navigation.navigate(navigationStrings.OTP_VERIFICATION, {
            userId: response.data.userId,
            phoneNumber: phoneNumber,
          });

          showMessage({
            type: 'success',
            message: 'OTP sent successfully ',
          });
        })
        .catch(error => {
          // this.setState({isvalid: false}),
          updateState({isvalid: false}),
            showMessage({
              type: 'danger',
              message: 'Login failed ',
            });

          console.log(error);
        });
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      alert(JSON.stringify(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  
    const {isvalid} = state;
    return (
    <KeyboardAwareScrollView>
      <View style={styles.wrapper}>
        <Text style={styles.createAccount}>{strings.CREATE_ACCOUNT}</Text>
        <Image source={imagePath.mobilePhone} style={styles.mobilePhone} />
        <Text style={styles.account}>
          {strings.ENTER_YOUR_MOBILE_NUMBER_TO_CREATE_ACCOUNT}
        </Text>
        <Text style={styles.info}>
          {strings.WE_WILL_SEND_YOU_A_ONE_TIME_PASSWORD}
        </Text>
          <View style={styles.container}>
          <View style={styles.input}>
            <InputText
              placeholder={strings.ENTER_PHONE_NUMBER}
              keyboardType={'numeric'}
              onChangeText={setNumber}
            />
          </View>
          <ButtonComponent
            buttonText={strings.SEND_OTP}
            onButtonCLick={() => checkData()}
            isvalid={isvalid}
          />
          <View style={styles.facebookLogin}>
            <LoginButton
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                  console.log('login is cancelled.');
                } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                    console.log(data.accessToken.toString());
                  });
                }
              }}
              onLogoutFinished={() => console.log('logout.')}
            />
            <GoogleSigninButton
              style={styles.googleSignin}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
              disabled={state.isSigninInProgress}
            />
          </View>
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 'auto',
    position: 'relative',
  },
  createAccount: {
    color: colors.placeholderText,
    fontSize: 25,
    marginVertical: 20,
    textAlign: 'center',
  },
  social: {
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 60,
    width: 260,
    height: 40,
    marginHorizontal: 50,
    backgroundColor: colors.fbBg,
    borderColor: colors.fbBg,
    borderRadius: 10,
  },
  facebookImg: {
    width: 30,
    height: 30,
    marginHorizontal: 35,
    marginVertical: 3,
  },
  facebookText: {
    marginVertical: 8,
    marginHorizontal: -25,
    fontFamily: fontFamily.Bold,
    color: colors.buttonText,
    fontSize: 16,
  },

  info: {
    color: colors.placeholderText,
    marginHorizontal: 70,
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 15,
  },
  mobilePhone: {
    width: 130,
    height: 130,
    marginHorizontal: 110,
    marginVertical: 40,
  },
  account: {
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 50,
  },
  wrapper: {
    flex: 1,
  },
  facebookLogin: {
    marginVertical: 40,
    marginHorizontal: 80,
  },
  googleSignin:{
    width: 192, 
    height: 48
  },
});
