import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import home from './home';
import './index.css';
import './test.scss'


// const func=(msg,callback)=>{
//     const allowTransition = window.confirm(msg);
//     // callback(allowTransition)
//    }

ReactDOM.render(
    <BrowserRouter 
        basename='/test'
        // getUserConfirmation={func('welcome test react!')}
    >
        <Route path="/" component={home} />
    </BrowserRouter>
,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
