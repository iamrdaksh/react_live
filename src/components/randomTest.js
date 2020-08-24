import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RandomTest extends Component {
    //Check test3.js & test4.js


    // static getDerivedStateFromProps(props, state){
    //     console.log('[random test.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('randomtest.js shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('random.js getSnapshotBeforeUpdate');
        return {message: 'Shapshot'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('random.js componentDidUpdate');
        console.log(snapshot);
    }
    render() {
        // const rnd = Math.random();
        // if(rnd> 0.7){
        //     throw new Error('Something is not right');
        // }   
        return (
            <div>
                <h1>Random</h1>
                <ul>
                    <li>
                        <NavLink exact to="/test1">Test1</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/test4">Test4</NavLink>
                    </li>
                </ul>

            </div>
        )
    }
}

export default RandomTest;
