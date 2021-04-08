import React from 'react';
import {View , Text , Image ,StyleSheet, TouchableOpacity} from 'react-native';






function ListItem( {data}){

return(
    <View>
       
                   
       
    <View style={{borderBottomWidth: 0.17, borderColor: 'lightgray' }} >
        <View style={Styles.container} >
        <Image 
        
        source={{uri: data.userInfo.profileImg[1].original}} 
        style = {Styles.profile} 
        />
        
        <Text style={Styles.name}>{data.userInfo.fullName}</Text>
        <Text style={Styles.time}>{data.status}</Text>
        </View>
        <View>
        <Text style={Styles.text}>{data.userInfo.bio}</Text>
        </View>
      

    </View>
    </View>
)


}


const Styles = StyleSheet.create({


    container:{
        flexDirection:"row",
        marginBottom:10,
        marginTop:10,
    },
    profile:{
        width:60,
        height:60,
        marginLeft:10,
        borderRadius: 30
    },
    name:{
        marginTop:3,
        fontSize:22,
        marginLeft:10,
        

    },
    time:{
        marginLeft:"auto",
        color:"gray",
        marginTop:15,
        marginRight:10,
        color: 'green'
        

    },
    text:{
        marginLeft:80,
        marginTop:-35,
        color:"gray",
        

    }
    


})

export default ListItem;