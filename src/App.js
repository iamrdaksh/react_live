import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from '../Mysass.module.scss';

class App extends React.Component {
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
      <div className={styles.outerdiv}>
        <div className={styles.login}>
          <header>Login in React </header>
          <form onSubmit={this.submit}>
            <input
              type="text" placeholder="Enter Your UserName" className={styles.inputarea} name="username"
              onChange={this.myChangeHandler}
            />
            <br />
            <input
              type="password" placeholder="Enter Your Password" className={styles.inputarea} name="password"
              onChange={this.myChangeHandler}
            />
            <br />
            <input
              type="submit" className={styles.btn} onClick={this.handleClick}
            />
            <p>Not registered yet, Register Now</p>
            <button className={styles.btn} >Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
