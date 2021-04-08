import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import { ceil } from 'react-native-reanimated'
import Loader from './Loader'
import actions from "../redux/actions"
import imagePath from '../constants/imagePath'


export default function ColorsModal( {data , onSelect , selected}) {

    const selecteid=(id)=>{
        onSelect(id)
        actions.ChangeThemeColor(data.colorId)
    }
    return (
        <View style={{flex:1 ,}}> 
        <TouchableOpacity onPress={()=>selecteid(data.id)}>
        <View style={{backgroundColor:data.colorId , height:100 , borderRadius:10 ,flexDirection:'row' }}>

            <Text style={styles.dataText}>{data.name}</Text>
            {/* {(selected===data.id)&&<Image source={imagePath.tick} style={styles.tick}/>} */}
            
            
        </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dataText:{
        
        marginLeft:20,
        marginTop:'auto',
        marginBottom:'auto',
        color:"white"
    },
    tick:{
        marginLeft:10,
        width:30,
        height:30,
        marginTop:'auto',
        marginBottom:'auto',
    }
})
