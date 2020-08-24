import React, { Component } from 'react';
import styled from 'styled-components';
import '../mysass.scss';
import WithClasses from './hoc/WithClasses';

const StyledH1 = styled.h1`
    font-size: 50px;
    color: ${props => props.changeColor ? 'coral' : '#2e8240d9'};
    text-align: center;

    &:hover{
        color: ${props => props.changeColor ? '#2e8240d9' : 'coral'};
    }
`;

const StyledButtton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 10px 40px;
`;

class SignIn extends Component {

    state = {
        flag: true,
        username: '',
        password: ''
    }

    submitHandler = (e) => {
            e.preventDefault();
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log('tryme :: ', name,value);
            this.setState({
                [name]: value
        })
    }

    handleClick = () => {
        const Username = this.state.username;
        const Password = this.state.password;
        console.log(Username);
        console.log(Password);
        if(Username === 'Rahul' && Password === '12345'){
            alert();
        }
    }

    render() {
        return (
            <WithClasses classes="tempClass">
                <StyledH1 changeColor={this.state.flag}>Welcome to Sign In </StyledH1>
            
                <form className='formStyle' onSubmit={this.submitHandler}>
                    <div>
                        <label>UserName</label>
                        <input type='test' placeholder="Enter username" onChange={this.changeHandler} name="username" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" onChange={this.changeHandler}
                        name="password" />
                    </div>
                    <div>
                        <StyledButtton type="submit"  onClick={this.handleClick}>Login</StyledButtton>
                    </div>

                </form>
            </WithClasses>
        )
    }
}

export default SignIn;