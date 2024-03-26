import React from 'react';
import {Link} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiMaildotru } from "react-icons/si";


const Register = () => {
    return (
            <div className="register">
                <form className="register__form">
                    <div className="register__row">
                        <h2 className="register__title">
                            Поиск работы
                        </h2>
                        <div className="register__row-card">
                            <input placeholder={"Имя"} className={"register__input"} type="email"/>
                            <input placeholder={"Email"} className={"register__input"} type="email"/>
                            <input placeholder={"Пароль"} className={"register__input"} type="password"/>
                            <div className="register__button">
                                <Link to="/login">
                                    <button className="register__btn-link" type={"submit"} style={{cursor:"pointer"}}>
                                        Уже есть акаунт!
                                    </button>
                                </Link>
                            </div>
                                <button className="register__submit" type={"submit"} style={{cursor:"pointer"}}>
                                    Регистрация
                                </button>
                            <div className="register__icons">
                            <span>
                              <FcGoogle style={{cursor:"pointer"}} size={25}/>
                            </span>
                                <span>
                               <SiMaildotru style={{cursor:"pointer",color:"red"}} size={25}/>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="register__bottom">
                        <h2 className="register__title">
                            Поиск сотрудников
                        </h2>
                        <p className="register__text">
                            Размещение вакансий и доступ к базе резюме
                        </p>
                        <button className={"register__submit"} type={"submit"}>
                            Я ищу сотрудников
                        </button>
                    </div>
                </form>
            </div>

    );
};

export default Register;