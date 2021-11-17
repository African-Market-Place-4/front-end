import React, { Component } from "react";


export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value 
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()
    }
   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        className="form-control" 
                        placeholder="Enter email" 
                        />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    className="form-control" 
                    placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <span>password?</span>
                </p>
            </form>
        )
    }
}