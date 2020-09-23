import React from 'react';
import Nav from './nav';
import HomePage from './homePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './notfound';
import Todolist from './todolist';

class Home extends React.Component {
    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/react_live" component={HomePage} />
                    <Route exact path="/todo" component={Todolist} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default Home;
