import React from 'react'
import { View, Text , Image , StyleSheet, TouchableOpacity} from 'react-native'
import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings'
import MainStack from '../Navigation/MainStack'
import colors from '../styles/colors'
import { useNavigation } from '@react-navigation/native';



 function Header({textData , onBack}) {
    const navigation = useNavigation();

    return (
        <View style={{flexDirection:'row', backgroundColor: colors.themeColor         
    }}>
            <TouchableOpacity onPress={() =>navigation.openDrawer()}>
            {/* <Image source={imagePath.backIcon} style={styles.backIcon} 
            /> */}
            <Image source={imagePath.menu} style={styles.backIcon}/>
            </TouchableOpacity>
                <Text style={styles.textData}>{textData}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    backIcon:{
        width:30,
        height:30,
        marginHorizontal: 15,
        marginVertical: 8,
        tintColor: colors.buttonText
    },
    textData:{
        marginVertical:5,
        fontSize:25,
        color: colors.buttonText,
        marginHorizontal: 45
    }
})

export default Header;