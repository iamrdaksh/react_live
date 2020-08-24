import React, { Component } from 'react';
import Person from './test3';
import Radium, { StyleRoot } from 'radium';

class Test4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { id: '01', name: 'Rahul', age: 26 },
                { id: '02', name: 'Asha Rani', age: 30 },
                { id: '03', name: 'Vishnu', age: 23 }
            ],
            showPersons: false,
            showTest4: false
        }
    }
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState({ persons: persons })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
    }
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            persons: [
                { id: '01', name: 'Rahul', age: 26 },
                { id: '02', name: 'Asha Rani', age: 30 },
                { id: '03', name: 'Vishnu', age: 23 }
            ],
            showPersons: !doesShow,
            showTest4: !this.state.showTest4
        })
    }
    componentWillUnmount() {
        console.log('--- componentWillUnmount Called ---');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('--- shouldComponentUpdate Called ---');
    //     // if (nextProps.propname !== this.props.propname) {
    //     //     return true;
    //     // } else {
    //     //     return false;
    //     // }
    //     return true;
    // }

    render() {
        const style = {
            backgroundColor: 'teal',
            padding: '20px 40px',
            outline: 'none',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'green',
                color: 'white'
            }
        }
        //using radium we could use inline css with pseudo selector and media queries
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                charLength={person.name.length}
                            />
                        )
                    })}
                </div>
            )
            style.backgroundColor = 'yellow';
            style[':hover'] = {
                backgroundColor: 'pink',
                color: 'black'
            }
        }
        const classes = ['firstClass', 'tempClass'];
        if (this.state.persons.length <= 2) {
            classes.push('secondClass');
        }
        if (this.state.persons.length <= 1) {
            classes.push('thirdClass');
        }

        return (
            <StyleRoot>
                <div className={classes.join(' ')}>
                    {this.state.showTest4 ? <div><h1>Hi, I'm React App</h1>
                        <p>This is totally awesome</p></div> : null}

                    <button
                        style={style}
                        onClick={this.togglePersonHandler}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        )
    }
}

export default Radium(Test4);