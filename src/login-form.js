import React, { Component } from "react";
import NavBar from './nav-bar';

export default class Login extends React.Component {
    render () {
        return (
            <><div><NavBar /></div>
            
            <div className="auth-form-container">
                    <h3>Login</h3>
                    <form className="login-form">
                        <label htmlFor="username">username</label>
                        <input type="username" placeholder="username" id="username" name="username" />
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder="********" id="password" name="password" />
                        <button>Log In</button>
                    </form>
                </div></>
        )
    }
}



