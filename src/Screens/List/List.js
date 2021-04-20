import React, {Component} from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import actions from '../../redux/actions';
import InfiniteList from '../../Component/InfiniteList';
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import Loader from '../../Component/Loader';
import colors from '../../styles/colors';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      incressSkip: 0,
      refreshing: false,
      isLoadingMore: false,
      isNoMoreData: false,
      isLoading: true,
      isListEnd: false,
      isloading: false

    };
  }

  componentDidMount() {
    this.hitApiForUserData();
  }
  hitApiForUserData = (onEndReachCall = false) => {
    const {userArray, incressSkip, isListEnd} = this.state;
    let calcSkip = onEndReachCall ? incressSkip + userArray.length : 0;

  let data={
    searchType: 'LEADERBOARD',
    limit: '6',
    skip:  calcSkip.toString(),

  };
  <Loader isvalid={true} />
           actions
        .UserData(data)
        .then(res => {
          // console.log('this is the response: ', res);
          let updatedStateVar = {};
          if (res.data.length > 0) {
            let profilesData = onEndReachCall
              ? [...userArray, ...res.data]
              : res.data;
  
            updatedStateVar = {
              userArray: profilesData,
            };
          } else {
            updatedStateVar = {
              isListEnd: true,
              isNoMoreData: true,
            };
          }
  
          this.setState({
            ...updatedStateVar,
            isLoading: false,
            isLoadingMore: false,
            refreshing: false,
          });
        })
        .catch(err => {
          this.setState({isLoading: false, isLoadingMore: false});
        });
    };
    _onRefresh = () => {
      this.setState({refreshing: true, isNoMoreData: false});
      this.hitApiForUserData();
    };

  onEndReached = () => {
    const {isLoadingMore, isNoMoreData} = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({isLoadingMore: true});
    this.UserData(true);
  };
  render() {
    const {userArray} = this.state;
    const {isLoading,  Data, isLoadingMore, isloading, refreshing, isValid} = this.state;

    return (
      <View style={styles.container}>
        <Header textData={strings.INFINITE_LIST} />
      <View>
<FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={userArray}
          onEndReached={this.onEndReached}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => item._id}
          renderItem={({item}) => <InfiniteList data={item} />}
          onEndReached={this.hitApiForUserData}
          onEndReachedThreshold={1}
        />
  <View style={styles.loaderView}>
        <Loader isvalid={true} loadingColor={colors.searchLoadingColor} size={'small'} />
</View>
</View>
 </View>
    );
  }
}


const styles = StyleSheet.create({
   container:{
     flex:1
    },
loaderView:{
  marginVertical: 120
},
})
