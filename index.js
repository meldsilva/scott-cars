// ./src/index.jsx
//import react libs
import React from "react";
import ReactDOM from "react-dom";
//import routing components
import {Router, Route, hashHistory} from 'react-router';
//Import custom components
import {Car} from './car/car';
import {About} from './common/about';
import {Home} from './common/home';



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('container')
);