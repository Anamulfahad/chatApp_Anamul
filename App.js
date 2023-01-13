import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCp5gqjE93axYLjxLCX3-3NBKoT8MZINkU",
  authDomain: "chatauth-47793.firebaseapp.com",
  projectId: "chatauth-47793",
  storageBucket: "chatauth-47793.appspot.com",
  messagingSenderId: "487781291782",
  appId: "1:487781291782:web:c81ec6ee9aa42c43e3f087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
