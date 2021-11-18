import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
        // e.preventDefault();
        // axios.post('BASE URL GOES HERE/auth/register', user)
        //     .then(resp=>{
        //         setUser({
        //          username:"",
        //          password:""
        //          });
        //         navigate('/login');
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
        navigate('/login');
    }

    return (
        <div className="create-account-page">
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
                    </div>
                    <button id="create-acct-button">Create Account</button>
            </form>
            {/* PAGE CONTAINER ENDS HERE */}
        </div>
    )
    }
export default CreateAccount;