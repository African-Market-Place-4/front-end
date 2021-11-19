import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddItem.css'


const CreateAccount = (props) => {
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
    const navigate = useNavigate();
    const submitForm = event => {
        event.preventDefault();
        axios.post('https://african-marketplace-4.herokuapp.com/api/auth/register', user)
            .then(resp=>{
                setUser({
                 username:"",
                 password:""
                 });
                navigate('/login');
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className="create-account-page">
            <form className="create-acct-form" onSubmit={submitForm}>
                <div className="create-form-container">
                    <h2>Create Account</h2>
                    <label className="create-label">Username</label>
                    <input className="create-input" id="username"
                        type="text"
                        name="username"
                        placeholder="enter Username"
                        onChange={handleChanges}
                        value={user.username} />
                    <label className="create-label">Password</label>
                    <input className="create-input" id="password"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChanges}
                        value={user.password} />
                    </div>
                    <button className="btn btn-primary btn-block submit" id="create-acct-button">Create Account</button>
            </form>
            {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
    }
export default CreateAccount;