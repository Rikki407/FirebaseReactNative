import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDeJW3JZ8uO9qXhmfRLMgpv0L5im2C8O1I',
            authDomain: 'fir-reactnative-8393d.firebaseapp.com',
            databaseURL: 'https://fir-reactnative-8393d.firebaseio.com',
            projectId: 'fir-reactnative-8393d',
            storageBucket: 'fir-reactnative-8393d.appspot.com',
            messagingSenderId: '649849654853'
          }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Rikki Auth" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
