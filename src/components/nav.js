import React, { Component } from 'react';
import logo from '../assets/react-logo.png';
import styles from '../Mysass.module.scss';
import { NavLink } from 'react-router-dom';
import DateJS from './dateJS';

class Nav extends Component {
    render() {
        return (
            <div className={styles.nav_bar}>
                <img src={logo} className={styles.React_logo} alt="logo" />
                <DateJS />
                <ul className={styles.nav_links}>
                    <li>
                        <img src={require("../assets/rahul_daksh.jpg")} className={styles.React_logo} alt="rahul daksh" />
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/todo">Todoist</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/react-keep">React Keep</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;