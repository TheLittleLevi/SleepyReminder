import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Email from './src/login/email.js';
import File from './src/login/newfile.js';






const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Email: {screen: Email},
  File: {screen: File},
  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
     <View style={styles.container}>
     <View style={styles.welcome}>
     <Text style={styles.welcomeText}>
     Who are you giving the gift to?
     </Text>
     </View>
     <View style={styles.name}>
     <Text style={styles.answerText}>
     A. Family Member
     </Text>
     <Text style={styles.answerText}>
     B. Friend
     </Text>
     <Text style={styles.answerText}>
     C. Best Friend
     </Text>
     <Text style={styles.answerText}>
     D. Pet
     </Text>
     <Text style={styles.answerText}>
     E. Other...
     </Text>
     </View>
     <View style={styles.enter}>
     <Text style={styles.enterText}>
     Enter
     </Text>
     </View>
     </View>
  }
}


