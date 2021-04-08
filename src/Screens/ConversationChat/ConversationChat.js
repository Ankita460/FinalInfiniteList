import React,{Component} from 'react';
import {View,StyleSheet, Text, FlatList} from 'react-native';
import actions from '../../redux/actions';
import ListItem from '../../Component/ListItem';
import Header from '../../Component/Header';
import strings from '../../constants/lang/en'
export default class ConversationChat extends Component{
    constructor(props){
        super(props);
        this.state={
            chatArray: [],
        }
    }
    componentDidMount(){
     actions.getAllConversations().then(res=>{
         this.setState({chatArray: res.data})
         console.log(res,"................get all conversation.......")
     })
     .catch(err=>{
         console.log(err)
     })
    }

    render(){
        const{chatArray}=this.state;
        return(
            <View>
                      <Header textData={strings.CHAT}  />

                <FlatList
              data={chatArray}
    
              showsVerticalScrollIndicator={false}
              numColumns={1}
              keyExtractor={item => item._id}
              ItemSeparatorComponent={() => <View style={{margin: 10}} />}
              renderItem={({item}) => <ListItem data={item} />}

      />
            </View>
        )
    }
}