import React from 'react';
import {View, Text, Image, StyleSheet , SafeAreaView} from 'react-native';

export default function InfiniteList({data}) {
  return (
   
      <View style={styles.wraper}>
        <Image
          source={{uri: data.profileImg[1].original}}
          style={styles.profileImage}
        />
        <View style={{flexDirection:'column'}}>
      
       
        </View>
        
      </View>
      
   
  );
}
const styles = StyleSheet.create({
  wraper: {
      flex:1,
      
    borderRadius: 20,
  
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  profileImage: {
    width: 300,
    height: 200,
    margin: 10,
    
    borderRadius: 10,

  },
  name:{
      marginTop:20
  },
  
});
