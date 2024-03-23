import React from 'react';
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import {Link} from "react-router-dom"
>>>>>>> 64ccbef7e1a8c8eb5584e465e43474d3d8bf62d5
const Header = () => {
    return (
            <header className="header">
                <div className="container">
                    <div className="header__nav">
                        <div className="header__right">
                            <img src="https://incrussia.ru/wp-content/uploads/2022/07/photo_2022-07-18_11-47-45.jpg"
                                 alt=""
                                 className="header__img"/>
                            <p className="header__info">Работодателям</p>
<<<<<<< HEAD
                            <p className="header__info">Помощь</p>
=======
                            <Link to={"/help"}>
                                <p className="header__info">Помощь</p>
                            </Link>
>>>>>>> 64ccbef7e1a8c8eb5584e465e43474d3d8bf62d5
                        </div>
                        <div className="header__left">
                            <a className="header__info">
                                Поиск
                            </a>
                            <button className="header__btn">
                                Создать резюме
                            </button>
<<<<<<< HEAD
                            <Link to={"/register"}>
                                <p className="header__login">
                                    Войти
                                </p>
                            </Link>
=======
                            <p className="header__login">
                                Войти
                            </p>
>>>>>>> 64ccbef7e1a8c8eb5584e465e43474d3d8bf62d5
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header;