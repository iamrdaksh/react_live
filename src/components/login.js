import React from 'react';
import logo from './logo.svg';
import './App.css';
import './mysass.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  submit = (event) => {
    event.preventDefault();
  }
  handleClick = (event) => {
    let user = this.state.username;
    let pass = this.state.password;
    console.log("UserName :: " + user);
    console.log("Password :: " + pass);
    if (user === 'Rahul'  && pass === '12345') {
      alert("Welcome to the World of React");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if(nam === 'username'){
      this.setState({
        [nam]: val
      });
    } else {
      parseInt(val);
      this.setState({
        [nam]: val
      });
    }
    
  }
  render() {
    return (
      <div className="outerdiv">
        <div className="login">
          <header>Login in React </header>
          <form onSubmit={this.submit}>
            <input
              type="text" placeholder="Enter Your UserName" className="inputarea" name="username"
              onChange={this.myChangeHandler}
            />
            <br />
            <input
              type="password" placeholder="Enter Your Password" className="inputarea" name="password"
              onChange={this.myChangeHandler}
            />
            <br />
            <input
              type="submit" className="btn" onClick={this.handleClick}
            />
            <p>Not registered yet, Register Now</p>
            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
