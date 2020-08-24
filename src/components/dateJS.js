import React, { Component } from 'react';


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
        let currentHours = new Date();
        let currentHour = currentHours.getHours();
        let greeting = '';
        let cssWish = { fontWeight: '600' };
        if (currentHour >= 1 && currentHour <= 12) {
            greeting = 'Good Morning';
            cssWish.color = 'green';
        } else if (currentHour >= 13 && currentHour <= 18) {
            greeting = 'Good Evening';
            cssWish.color = 'yellow'
        } else {
            greeting = 'Good Night';
            cssWish.color = 'Red';
        }
        return (
            <>
                <span>Date is :: {new Date().toLocaleDateString()}</span> ||
                <span style={cssWish}>&nbsp; {greeting}</span> ||
                <span> Time is:: {this.state.currentTime}</span>
            </>
        )
    }
}

export default DateJS;