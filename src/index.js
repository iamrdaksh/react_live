import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './components/signup';
import BasicExample from './components/test2';
import * as serviceWorker from './serviceWorker';
import Test from './components/test';
import Test4 from './components/test4';
import Home from './components/home';
import GetList from './components/getAPIList';
import PostList from './components/postAPI';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// registerServiceWorker();