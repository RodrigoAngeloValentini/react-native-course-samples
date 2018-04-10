import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCAvnDVmVtwkQ1tj6OsX4uamf64ipYTdnA',
      authDomain: 'whatsapp-clone-b4474.firebaseapp.com',
      databaseURL: 'https://whatsapp-clone-b4474.firebaseio.com',
      projectId: 'whatsapp-clone-b4474',
      storageBucket: 'whatsapp-clone-b4474.appspot.com',
      messagingSenderId: '49805562825',
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
