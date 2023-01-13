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
} 