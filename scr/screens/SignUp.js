import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "@rneui/themed";

const SignUp = (props) =>{
    return (
        <View style={styles.viewStyle}>
          <Card>
            <Card.Title>Welcome to কথোপকথন</Card.Title>
            <Card.Divider />
            <Input
              placeholder="Name"
            />
            <Input
              placeholder="Student ID"
            />
            <Input
              placeholder="Email"
            />
            <Input
              placeholder="Password"
              secureTextEntry
            />
            <Button
              title="Sign Up!"
              type="solid"
            />
            <Button
              title="Already Have an Account?"
              type="clear"
            />
          </Card>
        </View>
      );
}