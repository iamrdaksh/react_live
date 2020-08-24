import React from 'react';
import '../App.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errormessage_name: '',
            errormessage_email: '',
            errormessage_username: '',
            Uname: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }
    errorInfo = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        // debugger
        if (nam === 'name' && val === '') {
            this.setState({
                errormessage_name: 'Full name is Mandatory'
            });
        }
        if (nam === 'email' && val === '') {
            this.setState({
                errormessage_email: 'email is Mandatory'
            });
        }
        if (nam === 'username' && val === '') {
            this.setState({
                errormessage_username: 'username is Mandatory'
            });
        }
    }
    changeHandler = (event) => {
        this.setState({
            Uname: event.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div id="signUp">
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-form">
                            <h1>Sign Up</h1>
                            <br />
                            <input type="text" name="name"
                                onChange={this.changeHandler}
                                placeholder="Enter your Name"
                                autoComplete="off"
                                value={this.state.Uname}
                            />{this.state.errormessage_name}
                            <br /><br />
                            <input type="email" name="email"
                                onChange={this.changeHandler}
                                placeholder="Enter Your Email ID"
                                autoComplete="off"
                            />{this.state.errormessage_email}
                            <br /><br />
                            <input type="text" name="username"
                                onChange={this.changeHandler}
                                placeholder="Enter Your UserName"
                                autoComplete="off"
                            />{this.state.errormessage_username}
                            <br /><br />
                            <input type="password" name="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                            />
                            <br /><br />
                            <input type="password" name="password"
                                placeholder="Confirm Password"
                                autoComplete="off"
                            />
                            <br />
                            <p>
                                <input type="checkbox" /> I agree to the <strong>Terms of User</strong>
                            </p>
                            <p>
                                <button style={{ backgroundColor: '#D560D5' }} onClick={this.errorInfo}>Sign Up</button>
                                <button>Sign in</button>
                            </p>
                            <p>Hello {this.state.Uname}</p>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Signup;