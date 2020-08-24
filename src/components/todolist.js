import React from 'react';
import Images from './image';

export default class ContactList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            btnValue: this.props.loginStatus,
            count: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    handleChange(event) {
        let temp = event.target.checked;
        console.log("checked value ::", temp);
        this.setState({
            checked: temp
        });
    }

    changeStatus(e) {
        this.setState({
            btnValue: !this.state.btnValue
        });
    }

    increment = () => {
        this.setState( (prevState) => {
            return{
                count: prevState.count + 1
            }
        });
    }

    alertChecked(e){
        console.log("Checked :: ", e);
    }

    render() {
        const bold = {
            fontWeight: 600
        }

        const btnValue = this.state.btnValue;
        let btn_text;
        if (btnValue) {
            btn_text = "Click to Logout";
        } else {
            btn_text = "Click to Login";
        }
        return (
            <div className="imageFormat">
                <button className="btn" onClick={this.increment}>Increment </button> <span>::  {this.state.count}</span>
                <Images imageURL={this.props.imageURL} altText={this.props.altText}/>
                {/* <img src={this.props.imageURL} /> */}
                <h3 style={{ display: !this.props.Name && 'none' }}> Name: {this.props.Name} 😄 </h3>
                <p>Phone: {this.props.Phone}</p>
                <p>Email: {this.props.email}</p>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} onMouseEnter={()=> this.alertChecked(this.props.Name)}/>
                <span>{this.props.text}</span>
                <br />
                <span style={bold}>Gender : </span>
                <select value={this.props.value}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <br />
                <br />
                <span

                    value={this.state.btnValue}>  Login Status :: {this.state.btnValue.toString().toUpperCase()}
                </span>
                <br />
                <br />
                <button style={{ display: 'block' }} className="btn" value={this.state.btnValue} onClick={this.changeStatus}> {btn_text} </button>
            </div>
        )
    }
}