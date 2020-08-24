import React, { Component } from 'react';
import Aux from './hoc/Auxilliary';

class HomePage extends Component {
    render() {
        return (
            <Aux>
                <h1>Welcome to Home Page of React</h1>
                <h2>Page is under maintenance</h2>
            </Aux>
        )
    }
}

export default HomePage;