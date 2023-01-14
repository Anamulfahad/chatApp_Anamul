import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity,image } from "react-native";

export default class SignIn extends React.Component{
    
    state = {
        name: ""
    }
    continue = () => {this.props.navigation.navigate("chat", {name: this.state.name})};
    render(){
        return(
            <View>
                <Text>Input User Name</Text>
                <TextInput placeholder="User Name" onChange={name => {this.setState({name});}} value={this.state.name} />
                <Button title="Eneter the chat app" onPress={this.continue}></Button>
            </View>
        );
    }
} 