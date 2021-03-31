import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import InputText from "../../Component/InputText";
import strings from "../../constants/lang"
import SendOtpButton from "../../Component/SendOtpButton"
import { showMessage, hideMessage } from "react-native-flash-message";
import validations from "../../utils/validations";
import actions from "../../redux/actions"
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
export default class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            
            isvalid:""
        };
      }
    
    
    
      
      setNumber = (text) => {

        this.setState({
            phoneNumber: text
        })
        
    
    
    }
    
    
    
    isValidate = () => {
        const { phoneNumber } = this.state;
    
        let errorMessage = validations({phoneNumber:phoneNumber})
        this.setState({
            isvalid:true
        })
        if (errorMessage) {


                 this.setState({  isvalid:false })
            showMessage({
                message: errorMessage,
                icon:"warning",
                type: "danger",
            });
            return false
        }
    
        return true
    }
    
    
    checkData = () => {
        const { phoneNumber} = this.state;
      const{navigation}=this.props;
        if (this.isValidate()) { 
            
            actions.loginWithOTP({contactDetails:{phoneNo: (phoneNumber),
              countryCode: "+91",
              countryCodeISO: "IN"}
            })
                .then(response => {

                    this.setState({  isvalid:false })
                   
                        this.props.navigation.navigate("OtpVerification" , {userId:response.data.userId ,phoneNumber:phoneNumber} )
                        
                        
                        
                        showMessage({
                            type:"success",
                            message:"OTP sent successfully "
                        })
                        
                        
                }).catch((error) => {
                    this.setState({ isvalid: false }),
                    showMessage({
                        type:"danger",
                        message:"Login failed "
                    })
                    
                        console.log(error)
                })
        }
    
    }




    render() {
        const{isvalid} = this.state
        return (
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <Image source={imagePath.loginBg} style={styles.loginBg}/>
                    <View style={styles.input}>
                    <InputText
                    placeholder={strings.ENTER_PHONE_NUMBER}
                    keyboardType={"numeric"}
                    onChangeText={this.setNumber}
                    />
                    </View>
                    <SendOtpButton buttonText={strings.SEND_OTP} onButtonCLick={()=>this.checkData()} isvalid={isvalid}/>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        marginTop:"auto",
        marginBottom:"auto",
        position: 'relative'

    },
    loginBg:{
     
        position: 'absolute'
    }

})
