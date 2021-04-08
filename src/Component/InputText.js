import React, { Component } from "react";
import {  TextInput , StyleSheet} from "react-native";
import { connect } from "react-redux";
import colors from "../styles/colors";


function TextaInput(props){
    const{placeholder , onChangeText ,secureTextEntry , onfocus , value , keyboardType} = props
    return(
            <TextInput 
        style={styles.TextInput}
        placeholder = {placeholder}
        onChangeText = {onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={onfocus}
        value={value}
        keyboardType={keyboardType}

        ></TextInput>
        

        


    )



}

  
  export default TextaInput;

 const styles = StyleSheet.create({
TextInput:{
    marginVertical: -40,
    marginHorizontal: 35,
    borderColor: colors.themeColor,
    backgroundColor: colors.themeColor,
    borderRadius: 30,

  
    width: 300,
    height: 55
}


 })