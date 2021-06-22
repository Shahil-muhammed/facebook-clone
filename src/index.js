import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './Store/FirebaseContext'
import firebase from './Store/Firebase/configuration'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);