import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDeJW3JZ8uO9qXhmfRLMgpv0L5im2C8O1I",
            authDomain: "fir-reactnative-8393d.firebaseapp.com",
            databaseURL: "https://fir-reactnative-8393d.firebaseio.com",
            projectId: "fir-reactnative-8393d",
            storageBucket: "fir-reactnative-8393d.appspot.com",
            messagingSenderId: "649849654853"
          }
        );
    }

    render() {
        return(
            <View>
                <Header headerText="Rikki Auth"/>
                <Text>Hello Rikki !!!</Text>
            </View>
        );
    }
}

export default App;