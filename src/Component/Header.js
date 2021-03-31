import React from 'react'
import { View, Text , Image , StyleSheet, TouchableOpacity} from 'react-native'
import imagePath from '../constants/imagePath'


export default function Header({textData , onBack}) {
    
    return (
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>onBack()}>
            <Image source={imagePath.backIcon} style={styles.backIcon} 
            />
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
    },
    textData:{
        marginVertical:5,
        fontSize:25
    }
})

