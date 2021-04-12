import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import actions from '../../redux/actions';
import Header from '../../Component/Header';
import strings from '../../constants/lang/en';
import UserChatComponent from '../../Component/UserChatComponent';
import navigationStrings from '../../constants/navigationStrings';

export default class UserChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatArray: [],
    };
  }
  componentDidMount() {
    actions
      .getAllConversations()
      .then(res => {
        this.setState({chatArray: res.data});
        console.log(res, '................get all conversation.......');
      })
      .catch(err => {
        console.log(err);
      });
  }

  onNavigation=(obj)=>{
    this.props.navigation.navigate(navigationStrings.USER_CHAT_MESSAGE, {
      data: obj
    })
    

  }

  render() {
    const {chatArray} = this.state;
    return (
      <View>
        <Header textData={strings.CHAT} />

        <FlatList
          data={chatArray}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={() => <View style={{margin: 10}} />}
          renderItem={({item}) => <UserChatComponent data={item} onNavigation={this.onNavigation}/>}
        />
      </View>
    );
  }
}
