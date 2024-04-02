import React from 'react';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import {logout} from "../../redux/auth/auth";

const Header = () => {
    const {data} = useSelector(store => store.auth)
    const dispatch = useDispatch()
    return (
            <header className="header">
                <div className="container">
                    <div className="header__nav">
                        <div className="header__right">
                            <Link to={'/'}>
                                <img src="https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019"
                                     alt=""
                                     className="header__img"/>
                            </Link>
                            <p className="header__info">Работодателям</p>
<<<<<<< HEAD
                            <Link to={"/"}>
                                <p className="header__info">Мое резюме</p>
                            </Link>
=======
                            <Link to={"/summary"}>
                                <p className="header__info">Мое резюме</p>
                            </Link>

>>>>>>> 16ed821eae67ee9f33fdb6d5fe8ce5c07613ba09
                            <Link to={"/summary"}><p className="header__info">Мое резюме</p></Link>
                            <Link to={"/response"}>
                                <p className="header__info">Oтклики</p>
                            </Link>
                            <Link to={"/help"}>
                                <p className="header__info">Помощь</p>
                            </Link>
                        </div>
                        <div className="header__left">
                            <a className="header__info">
                                Поиск
                            </a>
                            <button className="header__btn">
                                Создать резюме
                            </button>
                            {
                                data ? <IoLogOutOutline onClick={() => dispatch(logout())} size={30} style={{color:"white"}} />
                                    : <Link to={"/register"}>
                                    <p className="header__login">
                                        Войти
                                    </p>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header;