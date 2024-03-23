import React from 'react';
import {Link} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiMaildotru } from "react-icons/si";


const Register = () => {
    return (
            <div className="register">
                <div className="container">
                    <div className="register__row">
                        <h2 className="register__title">
                            Поиск работы
                        </h2>
                        <div className="register__row-card">
                            <input placeholder={"Email"} className={"register__input"} type="email"/>
                            <div className="register__button">
                                <button className="register__btn" type={"submit"}>
                                    Продолжить
                                </button>
                                <button className="register__btn-link" type={"submit"} style={{cursor:"pointer"}}>
                                    Войти с паролем
                                </button>
                            </div>
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
                    <div className="register__footer">
                        <p className="register__desc">
                            Нажимая « Продолжить » или на&nbsp;кнопки сервисов,<br/> вы&nbsp;подтверждаете, что ознакомились и&nbsp;полностью принимаете <br/> условия&nbsp;<a href="">соглашения</a>
                        </p>
                    </div>
                </div>
            </div>

    );
};

export default Register;