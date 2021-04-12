import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

function Header({textData, onBack, showBack= ''}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {!!showBack ?(<Image source={imagePath.backIcon} style={styles.menu} />)
        :(<Image source={imagePath.menu} style={styles.menu}/>)
}
      </TouchableOpacity>
      <Text style={styles.textData}>{textData}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        backgroundColor: colors.themeColor
    },
  menu: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
    marginVertical: 8,
    tintColor: colors.buttonText,
  },
  textData: {
    marginVertical: 5,
    fontSize: 25,
    color: colors.buttonText,
    marginHorizontal: 45,
  },
});

export default Header;
