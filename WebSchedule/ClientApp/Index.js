import './css/site.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import store from './store';
import App from './App.js';
import { PrivateRoute } from './components/PrivateRoute';
let appStore = createStore(store, applyMiddleware(thunk));
ReactDOM.render(
    <AppContainer>
        <Provider store={appStore}>
            <Router>
                <App />          
            </Router>
        </Provider>
    </AppContainer>
    , document.getElementById('react-app'));

module.hot.accept();