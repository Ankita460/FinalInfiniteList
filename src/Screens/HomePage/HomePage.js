import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, FlatList} from 'react-native';
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import SendOtpButton from '../../Component/SendOtpButton';
import InputText from '../../Component/InputText';
import actions from '../../redux/actions';
import InfiniteList from '../../Component/InfiniteList';
import colors from '../../styles/colors';
import Loader from '../../Component/Loader';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: '',
      searchArray: [],
      
      isloading: false,
    };
  }

  handleBackButtonClick = () => {
    this.props.navigation.goBack('profile');
    return true;
  };
  onSearch = value => {
    const {searchtext} = this.state;
    this.setState({searchtext: value});

   

    if (this.check) {
      clearTimeout(this.check);
      
    }

    this.check = setTimeout(() => {
    this.setState({isloading: true});
      actions
        .UserSearch(searchtext)
        .then(res => {

          this.setState({searchArray: res.data, isloading: false});
          console.log(this.state.searchArray, 'search');

        })
        .catch(err => {
          this.setState({searchArray: [], isloading: false});
          console.log(this.state.searchtext);
          
        });
    }, 600);
  };
  render() {
      const{searchArray, isloading}=this.state;
    return (
      <View>
         <Header
          textData={strings.HEADER_SEARCH}
          onBack={() => this.handleBackButtonClick()}
        />
        <View style={styles.wrapper}>
        <TextInput placeholder="Search here" style={styles.searchHere} onChangeText={this.onSearch}/>
<View style={styles.loader}>
  <Loader isvalid={isloading} loadingColor={'black'} size={'small'} />
</View>
        </View>
     
        <FlatList
        data={searchArray}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        keyExtractor={item=> item._id}
        renderItem={({item})=> <InfiniteList data={item}/>}
        />  
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  wrapper:{
marginHorizontal: 10
  },
  loader:{
bottom: 65,
left: 90
},
  searchHere:{
    backgroundColor: colors.themeColor,
    borderRadius: 30,
    marginVertical: 40,
    width: 250,
    marginHorizontal: 50
  }
});
