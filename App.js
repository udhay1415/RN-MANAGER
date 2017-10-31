import React, { Component } from 'react';
import firebase from 'firebase';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDNCDBqOR05i10hGi_d-IEqrw8EM992i7U',
      authDomain: 'manager-791cf.firebaseapp.com',
      databaseURL: 'https://manager-791cf.firebaseio.com',
      projectId: 'manager-791cf',
      storageBucket: 'manager-791cf.appspot.com',
      messagingSenderId: '381398528245'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('manager', () => App);
export default App;
