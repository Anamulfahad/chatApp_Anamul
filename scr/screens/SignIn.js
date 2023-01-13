import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,image } from "react-native";

export default class SgnIn extends React.Component{
    
    state = {
        name: ""
    }
    continue = () => {this.props.navigation.navigate("Chat", {name: this.state.name})}
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text>Input User Name</Text>
                <TextInput placeholder="User Name" onChange={name => {this.setState({name});}} value={this.stat.name} />
            </View>
        );
    }
} 