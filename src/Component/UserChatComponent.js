import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';

export default function UserChatComponent({data, onNavigation}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => onNavigation(data)}>
        <View style={Styles.wrapper}>
          <View style={Styles.container}>
            <Image
              source={{uri: data.userInfo.profileImg[1].original}}
              style={Styles.profile}
            />

            <Text style={Styles.name}>{data.userInfo.fullName}</Text>
            <Text style={Styles.time}>{data.lastMessage[0].status}</Text>
          </View>
          <View>
            <Text style={Styles.text}>{data.lastMessage[0].text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 0.17,
    borderColor: colors.listBorder,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  profile: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 30,
  },
  name: {
    marginTop: 3,
    fontSize: 22,
    marginLeft: 10,
  },
  time: {
    marginLeft: 'auto',
    color: colors.placeholderText,
    marginTop: 15,
    marginRight: 10,
    color: colors.activeText,
  },
  text: {
    marginLeft: 80,
    marginTop: -35,
    color: colors.placeholderText,
  },
});
