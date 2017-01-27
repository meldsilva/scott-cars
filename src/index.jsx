// ./src/index.jsx
//import react libs
import React from "react";
import ReactDOM from "react-dom";
//import routing components
import {Router, Route, hashHistory} from 'react-router';
//Import custom components
import Home from "./common/home.jsx";
import {About} from "./common/about.jsx";
import {Car} from "./car/car.jsx";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/car" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('container')
);