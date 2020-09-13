import React, { Component } from 'react';
//using css modules
import styles from '../Mysass.module.scss';

class DateJS extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTime: ''
        }
    }
   

    // componentDidMount() {
    //     const thisBoundedIncrementer = this.currentTiming.bind(this);
    //     setInterval(thisBoundedIncrementer, 500);
    // }    

    render() {
        const currentTiming = () => {
            let currentHours = new Date();
            this.setState({
                currentTime: currentHours.toLocaleTimeString()
            });  
        }
        setInterval(currentTiming, 1000);
        
        return (
            <div className={styles.dateAlignment}>
                <span> Time is:: {this.state.currentTime}</span>
            </div>
        )
    }
}

export default DateJS;