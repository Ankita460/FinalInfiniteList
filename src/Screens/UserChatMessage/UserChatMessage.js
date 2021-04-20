import {GiftedChat} from 'react-native-gifted-chat';
import React, {Component} from 'react';
import actions from '../../redux/actions';
import { SOCKET_STRINGS } from '../../constants/socketStrings';
import socketServices from '../../utils/socketService';
import {connect} from 'react-redux'
import imagePath from '../../constants/imagePath';
import Header from '../../Component/Header';
import {View} from 'react-native';
import strings from '../../constants/lang';
import ChatHeader from '../../Component/ChatHeader';

class UserChatMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar:
              'https://digitalrill.com/wp-content/uploads/2019/04/professional-girl-png-8.png',
          },
        },
      ],
    });
    this.getChatListing();
  }
  getChatListing = () => {
    const{data} = this.props.route.params;

   actions.getUserMessgeOneToOne(data.commonConversationId)
    .then(res => {
      const {userInfo} = this.props.route.params.data;
      //To send back response that all the messages have been seen;
      socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
        senderId: data._id,
        isRead: true,
        recieverId: (this.props.userData && this.props.userData._id) || '',
      });

      //Initalizing the chat history
      const messages = res.data.map((data, index) => {
        let message = {
          _id: data._id,
          text: data.text,
          createdAt: data.createdAt,
          user: {
            _id: data.senderId._id,
            name: data.senderId.firstName,
            avatar: userInfo.profileImg[1].original,
          },
        };
        if (!!data.repliedToText) {
          message.replyText = data.repliedToText;
        }
        return message;
      });
      this.setState({isLoading: false, messages});
    })
    .catch(err=>{
      console.log(err , "CDM CHAT+++++++++++")
    })
  };

  // onSend(messages = []) {
  //   this.setState(previousState => {
  //     return {
  //       messages: GiftedChat.append(previousState.messages, messages),
  //     };
  //   });
  // }
  onSend(messages = []) {
    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    // const {_id, commonConversationId} = this.props.route.params;
    const {_id , commonConversationId} = this.props.route.params.data;

    const {userData} = this.props;
    // To send new message
    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: _id,
      commonConversationId,
      messageType: 'Text',
      text: messages[0].text,
    });
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const {userInfo}=this.props.route.params.data;
    const {userData}=this.props
    const{data} = this.props.route.params;

    return (
      <>
      <ChatHeader dp={data.userInfo.profileImg[1].original} name={data.userInfo.fullName}/>
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: userData._id,
        }}
      />
    </>
    );

  }
}

const mapStateToProps = state => {
  return {
    userData: state.auth.userData,
  };
};

export default connect(mapStateToProps)(UserChatMessage);
 