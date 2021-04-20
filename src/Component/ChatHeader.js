import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import imagePath from '../constants/imagePath'
import strings from '../constants/lang'
import navigationStrings from '../constants/navigationStrings'
import colors from '../styles/colors'
import {useNavigation} from '@react-navigation/native';

export default function ChatHeader({dp, name}) {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=> navigation.navigate(navigationStrings.USER_CHAT)}>
          <Image source={imagePath.backIcon} style={styles.backIcon} />
                    </TouchableOpacity>
             <Image
              source={{uri: dp}}
              style={styles.dp}
            />
                  <Text style={styles.name}>{name}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    dp:{
        width: 50,
        height: 50,
        borderRadius: 30,
        marginVertical: 5
    },
    container:{
        flexDirection: 'row', 
        backgroundColor: colors.themeColor
    },
  backIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
    marginVertical: 8,
    tintColor: colors.buttonText,
  },
  name: {
    marginVertical: 10,
    fontSize: 25,
    color: colors.buttonText,
    marginHorizontal: 25,
  },
})
