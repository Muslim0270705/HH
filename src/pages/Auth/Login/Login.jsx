import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <form className="login__form">
                <div className="login__row">
                    <h2 className="login__title">
                        Авторизация
                    </h2>
                    <input placeholder={"Email"} className={"login__input"} type="email"/>
                    <input placeholder={"Пароль"} className={"login__input"} type="password"/>
                    <div className="login__texts">
                        <p className="login__text">Забыли пароль?</p>
                        <Link to={"/register"} className={"login__text"}>
                            <button className="login__btn-link" type={"submit"} style={{cursor:"pointer"}}>
                                Нет акаунта?
                            </button>
                        </Link>
                    </div>`
                    <button type={"submit"} className="login__btns" style={{cursor:"pointer"}}>
                       Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;