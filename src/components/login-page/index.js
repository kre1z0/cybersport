import React, { Component } from 'react';
import './login-page.scss';
import GreenLogo from '../../assets/icons/green-logo.svg';

class Login extends Component {
    render() {
        return (
            <form className="login">
                <img className="logo" src={GreenLogo} alt="Сбербанк" />
                <h1 className="login-title">Геомониторинг залогов</h1>
                <div className="input-group">
                    <label htmlFor="username">Имя пользователя</label>
                    <input id="username" type="text" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password" />
                </div>
                <div className="login-button-group">
                    <a className="forgot-password" href="#">Забыли пароль?</a>
                    <button className="btn-green" type="submit">Войти</button>
                </div>
            </form>
        );
    }
}

export default Login;
