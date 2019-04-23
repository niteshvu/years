import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Nitesh/home';
import About from './Nitesh/about';
import Skills from './Nitesh/skills';
import Contact from './Nitesh/contact';
import Resume from './Nitesh/resume';
import Navbar from './Nitesh/navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
    <div>
        <Route path="/home" component={App}/>
        <Route exact path="/" component={App}/>
        <Route path="/resume" component={Resume}/>
    </div>
    </Router>
    
    
    , document.getElementById('root'));
registerServiceWorker();
