import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {useDispatch} from "react-redux";
import {login, register} from "../../../redux/auth/auth";

const Login = () => {
    const [userL,setUserL] = useState({
        email:"",
        password:"",
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChange = (e) => {
        setUserL({...userL,[e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(userL)).then(navigate('/'))
    }
    return (
        <div className="login">
            <form onSubmit={(e) => onSubmit(e)} className="login__form">
                <div className="login__row">
                    <h2 className="login__title">
                        Авторизация
                    </h2>
                    <input onChange={(e) => onChange(e)} name={"email"} placeholder={"Email"} className={"login__input"} type="email"/>
                    <input onChange={(e) => onChange(e)} name={"password"} placeholder={"Пароль"} className={"login__input"} type="password"/>
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