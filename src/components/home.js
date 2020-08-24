import React from 'react';
import About from './about';
import Contact from './contact';
import logo from '../background.jpeg';
import Nav from './nav';
import HomePage from './homePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './notfound';
import SignUp from './signup';
import RandomTest from './randomTest';
import SignIn from './signin';
import Test4 from "./test4";
import Test1 from "./test";
import Signup_UI from './signup_materialUI';

class Home extends React.Component {
    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={HomePage} />                    
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/random-test" component={RandomTest} />
                    <Route exact path="/test4" component={Test4}/>
                    <Route exact path="/test1" component={Test1}/>
                    <Route exact path="/Signup_UI" component={Signup_UI}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default Home;
