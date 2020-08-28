import React, { Component } from 'react';
import logo from '../react-logo.png';
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
                        <NavLink exact activeClassName="active" to="/todo">Todoist</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;