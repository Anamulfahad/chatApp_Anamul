import React from "react";
import { Platform, KeyboardAvoidingView, SafeAreaView  } from "react-native";
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from "../firebase/firebase"

export default class chat extends React.Component{
    
    state = {
        messages: []
    }

    get user(){
        return{
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount(){
        Fire.get(message => this.setState(previous=>({
            messages: GiftedChat.append(previous.message, message)
        })))
    }

    componentWillUnmount(){
        Fire.off();
    }

    render(){
        const Chat = <GiftedChat messages={this.state.messages} onSend = {Fire.send} user={this.user}/>
        if (Platform === 'andro'){
            <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={30} enabled>
                {Chat}
            </KeyboardAvoidingView>
        }
        return <SafeAreaView style={{flex: 1}}>
            {Chat}
        </SafeAreaView>
    }
} 