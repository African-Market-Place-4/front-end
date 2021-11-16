import React, { useState } from "react";
import axios from 'axios';


function CreateAcctForm = props => {
    const [user, setUser] = useState({
        username:"",
        password:""
    });
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const submitForm = event => {
       
    }
}

    return (
        <CreateAcctContainer>
            <form className="create-acct-form" onSubmit={submitForm}>
                <div className="create-form-container">
                    <h2>Create Account</h2>
                    <label className="create-label" htmlFor="username">Username</label>
                    <input className="create-input" id="username"
                        type="text"
                        name="username"
                        placeHolder="enter Username"
                        onChange={handleChanges}
                        value={user.username} />
                    <label className="create-label" ftmlFor="password">Password</label>
                    <input className="create-input" id="password"
                        type="password"
                        name="password"
                        placeHolder="Enter Password"
                        onChange={handleChanges}
                        value={user.password} />
            </form>
            <div>
                <button id="create-acct-button">Create Account</button>
            </div>
        </CreateAcctContainer>
    )

export default CreateAcctForm;