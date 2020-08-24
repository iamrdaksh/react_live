import React, { Component } from 'react';
import logo from '../react-logo.png';
import About from './about';
import '../mysass.scss';
import { NavLink } from 'react-router-dom';
import DateJS from './dateJS';

class Nav extends Component {
    render() {
        return (
            <div className="nav-bar">
                <img src={logo} className="React-logo" alt="logo" />
                <DateJS />
                <ul className="nav-links">
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/signin">Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/signup">Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/random-test">Random Test</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/Signup_UI">SignUP Material UI</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;