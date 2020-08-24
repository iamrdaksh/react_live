import React, { useEffect } from 'react';
import Radium, { StyleRoot } from 'radium';

const Person = (props) => {

    useEffect(() => {
        console.log('React Hook :: UseEffect');
        // componentDidMount & componentDidUpdate in useEffect
        // setTimeout(()=>{
        //     alert('React Hooks');
        // }, 1000);
//Execute only when person changed
return () => {
    //works same as componentWillUnmount
    console.log('Test3 clean up');
}
    }, []);

    
    const style = {
        '@media (max-width: 800px)': {
            backgroundColor: 'red'
        }
    }
    return (
        <StyleRoot>
            <div style={style}>
                <p onClick={props.click}>I am {props.name} & I am {props.age} years old</p>
                <p>I am Children :: {props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
                <p>{props.charLength}</p>
            </div>
        </StyleRoot>
    )
}

export default Radium(Person);