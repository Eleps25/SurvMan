import React, { Component } from "react";
import logo from "./sources/Logo.PNG"
import { Navigate } from "react-router-dom";
import "./css/Login.css";
import "./css/NewColors.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let rightPassword = "admin123";
        let rightUsername = "admin";
        if (this.state.username !== rightUsername || this.state.password !== rightPassword) {
            alert("Zadány špatné přihlašovací údaje");
        } else {
            this.handleLogin();
            console.log("Logged in");
        }
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    render() {
        return (
            <div className="login-body">
                <div className="login-main">
                    <img src={logo} alt="Logo společnosti SurvMan" style={{ width: "25vw", borderRadius: '0.3em' }} />
                    <p className="fw-bold">Zadejte prosím vaše přihlašovací údaje</p>
                    {this.state.isLoggedIn && <Navigate to="/dashboard" replace={true} />}
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div className="login-form-inputs">
                            <input
                                type="text"
                                name="username"
                                placeholder="Uživatelské jméno"
                                required="required"
                                value={this.state.username}
                                onChange={this.handleChange}
                                className="login-form-item"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Heslo"
                                required="required"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className="login-form-item"
                            />
                        </div>
                        <button className="btn bgcolor-primary-new login-form-item"><span className="text-light fw-bold">PŘIHLÁSIT SE</span></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
