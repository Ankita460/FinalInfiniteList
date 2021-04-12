import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang/en';
import actions from '../../redux/actions';
import Header from '../../Component/Header';
import colors from '../../styles/colors';
import ColorsModal from '../../Component/ColorsModal';
import fontFamily from '../../styles/fontFamily';
import ButtonComponent from '../../Component/ButtonComponent';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuModalVisible: false,
      selected: '',
      colors: [
        {
          id: 0,
          name: 'Blue',
          colorId: '#a0c4ff',
        },
        {
          id: 1,
          name: 'Yellow',
          colorId: '#ffc300',
        },
        {
          id: 2,
          name: 'Pink',
          colorId: '#ff006e',
        },
        {
          id: 3,
          name: 'Black',
          colorId: '#212529',
        },
        {
          id: 4,
          name: 'Green',
          colorId: '#007f5f',
        },
        {
          id: 5,
          name: 'Orange',
          colorId: '#ff9100',
        },
        {
          id: 6,
          name: 'Red',
          colorId: '#FF0000',
        },
        {
          id: 7,
          name: 'Brown',
          colorId: '#8B4513',
        },
        {
          id: 8,
          name: 'Purple',
          colorId: '#800080',
        },
      ],
    };
  }
  _onSelect = id => {
    this.setState({selected: id});
  };

  _openModal = () => {
    this.setState({isMenuModalVisible: true});
  };

  _closeModal = () => {
    this.setState({isMenuModalVisible: false});
  };

  render() {
    const {isMenuModalVisible, colors, selected} = this.state;
    return (
      <View>
        <Header
          textData={strings.PROFILE}
        />
   <Image source={imagePath.profileImage} style={styles.profile} />
        <Text style={styles.name}>{strings.PERSON_NAME}</Text>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Image source={imagePath.call} style={styles.call} />
            <View style={styles.mobileText}>
              <Text style={styles.mobile}>{strings.MOBILE}</Text>
              <Text style={styles.number}>{strings.PHONE_NUMBER}</Text>
            </View>
          </View>
          <View style={styles.mailText}>
            <Image source={imagePath.mail} style={styles.mail} />
            <View style={styles.emailText}>
              <Text style={styles.email}>{strings.EMAIL}</Text>
              <Text style={styles.maill}>{strings.EMAIL_ID}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.aboutText}>
            <Image source={imagePath.day} style={styles.day} />
            <View style={styles.aboutUsText}>
              <Text style={styles.mobile}>{strings.ABOUT_US}</Text>
              <Text style={styles.number}>{strings.PROFILE}</Text>
            </View>
          </View>
          <View style={styles.termssText}>
            <Image source={imagePath.terms} style={styles.terms} />
            <View style={styles.condition}>
              <Text style={styles.termsText}>{strings.TERMS_AND_CONDITION}</Text>
              <Text style={styles.termstext}>{strings.TERMS_CONDITION}</Text>
            </View>
          </View>
          <View style={styles.termsText}>
            <Image source={imagePath.privacy} style={styles.privacy} />
            <View style={styles.termssText}>
              <Text style={styles.privacyText}>{strings.PRIVACY}</Text>
              <Text style={styles.privacytext}>{strings.POLICY}</Text>
            </View>
          </View>
        </View>

        <ButtonComponent
          buttonText={strings.LOG_OUT}
          onButtonCLick={() => actions.onLogout()}
        />
        <ButtonComponent
          buttonText={strings.CHANGE_THEME}
          onButtonCLick={() => this._openModal()}
        />
        <Modal
          transparent
          onRequestClose={() => this._closeModal()}
          visible={isMenuModalVisible}>
          <View style={styles.flatlist}>
            <FlatList
              data={colors}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <ColorsModal
                  data={item}
                  onSelect={this._onSelect}
                  selected={selected}
                />
              )}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row'},
  container: {
    backgroundColor: colors.themeColor,
    width: 300,
    marginHorizontal: 30,
    height: 170,
    borderRadius: 20,
    marginVertical: 20,
  },
  flatlist:{
    flex: 1,
     backgroundColor: colors.list},
  condition:{
    flexDirection: 'column'
  },
  termssText:{
    flexDirection: 'row'
  },
  container1: {
    backgroundColor: colors.themeColor,
    width: 300,
    marginHorizontal: 30,
    height: 200,
    borderRadius: 20,
    marginVertical: -15,
  },
  mailText:{
    flexDirection: 'row'
  },
  profile: {
    width: 80,
    height: 80,
    marginHorizontal: 140,
    marginVertical: 5,
    borderRadius: 10,
  },
  aboutUsText:{
    flexDirection: 'column'
  },
  aboutText:{
    flexDirection: 'row'
  },
  name: {
    textAlign: 'center',
    fontFamily: fontFamily.Bold,
  },
  call: {
    width: 20,
    height: 20,
    marginHorizontal: 50,
    marginVertical: 40,
    tintColor: colors.buttonText,
  },
  mobile: {
    marginVertical: 30,
    color: colors.buttonText,
    fontFamily: fontFamily.Bold,
  },
    emailText:{
    flexDirection: 'column'
  },
  mobileText:{
    flexDirection: 'column'
  },
  number: {
    marginTop: -28,
    color: colors.buttonText,
  },
  mail: {
    width: 20,
    height: 20,
    marginHorizontal: 50,
    marginVertical: -6,
    tintColor: colors.buttonText,
  },
  email: {
    marginVertical: -5,
    color: colors.buttonText,
    fontFamily: fontFamily.Bold,
  },
  maill: {
    color: colors.buttonText,
    marginTop: 4,
  },
  day: {
    width: 20,
    height: 20,
    marginHorizontal: 50,
    marginVertical: 40,
    tintColor: colors.buttonText,
  },
  terms: {
    width: 20,
    height: 20,
    marginHorizontal: 50,
    marginVertical: -6,
    tintColor: colors.buttonText,
  },
  termsText: {
    marginVertical: -10,
    color: colors.buttonText,
    fontFamily: fontFamily.Bold,
  },
  termstext: {
    color: colors.buttonText,
    marginTop: 10,
  },
  privacy: {
    width: 20,
    height: 20,
    marginHorizontal: 50,
    marginVertical: 30,
    tintColor: colors.buttonText,
  },
  privacyText: {
    marginVertical: 15,
    color: colors.buttonText,
    fontFamily: fontFamily.Bold,
  },
  privacytext: {
    color: colors.buttonText,
    marginTop: -44,
  },
});
