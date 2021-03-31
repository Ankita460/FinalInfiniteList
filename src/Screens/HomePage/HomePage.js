import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from "../../Component/Header"
import strings from '../../constants/lang'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    render() {
        return (
            <View>
                <Header textData={strings.HOME} onBack={()=>this.handleBackButtonClick()} />
                <Text> Home </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
