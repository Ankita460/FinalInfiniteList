import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Image
} from 'react-native';
import SendOtpButton from '../../Component/SendOtpButton';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import Header from '../../Component/Header';
import colors from '../../styles/colors';
import ColorsModal from '../../Component/ColorsModal';
export default class Profile extends Component {
constructor(props){
  super(props);
  this.state={
    isMenuModalVisible: false,
      selected:"",
      colors: [{
          id:0,
          name:"Blue",
          colorId:"#a0c4ff",
          

      },
      {
        id:1,
        name:'Yellow',
        colorId:"#ffc300",
        

    },
    {
        id:2,
        name:"Pink",
        colorId:"#ff006e",
        

    },
    {
        id:3,
        name:"Black",
        colorId:"#212529",
        

    },
    {
      id:4,
      name:"Green",
      colorId:"#007f5f",
      

  },
  {
    id:5,
    name:"Orange",
    colorId:"#ff9100",
    

},
{
  id: 6,
  name: "Red",
  colorId: "#FF0000",
},
{
  id: 7,
  name: "Brown",
  colorId: "#8B4513",
},
{
  id: 8,
  name:"Purple",
  colorId: "#800080",
}
    ]
  }
}
handleBackButtonClick=()=> {
  this.props.navigation.goBack("list");
  return true;
}
_onSelect=(id)=>{
  this.setState({selected:id})
}

_openModal = () => { 
  this.setState({isMenuModalVisible: true})  
 }

_closeModal = () => {  
   this.setState({isMenuModalVisible: false}) 
   }

render(){
  const {isMenuModalVisible , colors ,selected}=this.state;
  return(
    
    <View>
      {/* <Text>LOGOUT</Text> */}
      <Header textData={strings.PROFILE} onBack={()=>this.handleBackButtonClick()} />

      <Image source={imagePath.profileImage} style={styles.profile}/>
      <Text style={styles.name}>Linnie Ramsey</Text>
      <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Image source={imagePath.call} style={styles.call}/>
      <View style={{flexDirection: 'column'}}>

      <Text style={styles.mobile}>MOBILE</Text>
      <Text style={styles.number}>9882635278</Text>
      </View>

      </View>
      <View style={{flexDirection: 'row'}}>
      <Image source={imagePath.mail} style={styles.mail}/>
      <View style={{flexDirection: 'column'}}>

      <Text style={styles.email}>EMAIL</Text>
      <Text style={styles.maill}>abc123@gmail.com</Text>
      </View>
      
      </View>
      </View>
      <View style={styles.container1}>
      <View style={{flexDirection: 'row'}}>
      <Image source={imagePath.day} style={styles.day}/>
      <View style={{flexDirection: 'column'}}>

      <Text style={styles.mobile}>About Us</Text>
      <Text style={styles.number}>Profile</Text>
      </View>

      </View>
      <View style={{flexDirection: 'row'}}>
      <Image source={imagePath.terms} style={styles.terms}/>
      <View style={{flexDirection: 'column'}}>

      <Text style={styles.termsText}>Terms & Conditions</Text>
      <Text style={styles.termstext}>terms and conditions</Text>
      </View>
      
      </View>
      <View style={{flexDirection: 'row'}}>
      <Image source={imagePath.privacy} style={styles.privacy}/>
      <View style={{flexDirection: 'column'}}>

      <Text style={styles.privacyText}>Privacy & Policy</Text>
      <Text style={styles.privacytext}>privacy and policy</Text>
      </View>
      
      </View>
      </View>
      
      
      
      <SendOtpButton
      buttonText={strings.LOG_OUT}
      onButtonCLick={()=> actions.onLogout()}
      />
      <SendOtpButton
            buttonText={strings.CHANGE_THEME}
            onButtonCLick={() => this._openModal()}
          />
           <Modal
          transparent
          onRequestClose={() => this._closeModal()}
          visible={isMenuModalVisible}>
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            
            <FlatList
              data={colors}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => <ColorsModal  data={item} onSelect={this._onSelect} selected={selected}/>}
              
            />
            
          </View>
        </Modal>
    </View>

  )
}
}


const styles=StyleSheet.create({
  container:{
    backgroundColor: colors.themeColor, 
    width: 300, 
    marginHorizontal: 30, 
    height: 170,
    borderRadius: 20,
    marginVertical: 20
  },
  container1:{
    backgroundColor: colors.themeColor,
    width: 300, 
    marginHorizontal: 30, 
    height: 200,
    borderRadius: 20,
    marginVertical: -15
  },
  profile:{
    width: 80,
    height: 80,
    marginHorizontal: 140,
    marginVertical: 5,
    borderRadius: 10
    
  },
  name:{
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  call:{
    width: 20,
    height: 20,
    marginHorizontal: 50,
    marginVertical: 40,
    tintColor: colors.buttonText
  },
  mobile:{
    marginVertical: 30,
    color: colors.buttonText,
    fontFamily: 'OpenSans-Bold'

  },
  number:{
    marginTop: -28,
    color: colors.buttonText
    
  },
mail:{
  width: 20,
  height: 20,
  marginHorizontal: 50,
  marginVertical: -6 ,
  tintColor: colors.buttonText
},
email:{
  marginVertical: -5,
  color: colors.buttonText,
  fontFamily: 'OpenSans-Bold',

},
maill:{
  color: colors.buttonText,
  marginTop: 4
},
day:{
  width: 20,
  height: 20,
  marginHorizontal: 50,
  marginVertical: 40,
  tintColor: colors.buttonText
},
terms:{
    width: 20,
    height: 20,
    marginHorizontal: 50,
    marginVertical: -6 ,
    tintColor: colors.buttonText
  
},
termsText:{
  marginVertical: -10,
  color: colors.buttonText,
  fontFamily: 'OpenSans-Bold',

},
termstext:{
  color: colors.buttonText,
  marginTop: 10
},
privacy:{
  width: 20,
  height: 20,
  marginHorizontal: 50,
  marginVertical: 30 ,
  tintColor: colors.buttonText
},
privacyText:{
  marginVertical: 25,
  color: colors.buttonText,
  fontFamily: 'OpenSans-Bold',
},
privacytext:{
  color: colors.buttonText,
  marginTop: -24
}

})