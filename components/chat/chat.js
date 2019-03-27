import React from 'react'
import {StyleSheet, View, ScrollView, KeyboardAvoidingView} from 'react-native'
import { Header  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from './input'
import Message from './message'
import Messages from './messages'

export default class Chat extends React.Component {



  render() {
    return (
      <View>
        <Header
          backgroundColor="rgb(126, 217, 75)"
          leftComponent={<Icon name="arrow-left" size={17} color="white" onPress={this.props.hideChat}/>}
          centerComponent={{ text: `${this.props.chatName}`, style: { color: '#fff', fontSize: 22 } }}
        />
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={90}
            >
            <View style={{height: 570}}>
              <ScrollView
                ref={ref => this.scrollView = ref}
                onContentSizeChange={()=>{
                  this.scrollView.scrollToEnd({animated: false});
                }}>
                  <Messages messages={this.props.messages} userId={this.props.userId}/>
              </ScrollView>
            </View>
            <Input addMessage={this.props.addMessage}/>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}
