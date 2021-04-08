

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Header from '../../Component/Header';
import strings from '../../constants/lang/en'
import colors from '../../styles/colors';
export default class QrCode extends Component {
    
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render() {
    return (
        <View>
<Header
                  textData={strings.HEADER_QRCODE}
                
                />
                 <View style={styles.QrCode}>
       <QRCode
            value="http://awesome.link.qr"

          />
        </View>
        {/* <View style={styles.scan}>
            <Text style={styles.scanNow}>SCAN NOW</Text>


        </View> */}

        <View style={styles.QRCodeScanner}>
        <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      
        </View>
        </View>

        
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
      QrCode:{
        marginHorizontal: 130,
        marginVertical: 30
    },
    QRCodeScanner:{
        marginVertical: 80
    },
    scanNow:{
        textAlign: 'center',
        marginVertical: 5,
        color: colors.buttonText
    },
    scan:{
        borderWidth: 1,
        width: 120,
        height: 40,
        marginHorizontal: 120,
        borderColor: colors.themeColor,
        backgroundColor: colors.themeColor
    }
    
});