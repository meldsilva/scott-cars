// ./src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from 'react-router';
import {Car} from './car';
import {About} from './about';


class Home extends React.Component {
    render(){
        return (<h1>Hello React Router FU</h1>);
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('container')
);