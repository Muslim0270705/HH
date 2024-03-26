import React from 'react';
import {Link} from "react-router-dom"
const Header = () => {
    return (
            <header className="header">
                <div className="container">
                    <div className="header__nav">
                        <div className="header__right">
                            <Link to={'/'}>
                                <img src="https://incrussia.ru/wp-content/uploads/2022/07/photo_2022-07-18_11-47-45.jpg"
                                     alt=""
                                     className="header__img"/>
                            </Link>
                            <p className="header__info">Работодателям</p>
<<<<<<< HEAD

                            <Link to={"/summary"}>
=======
                            <Link to={"/"}>
>>>>>>> 7ab949d5e7f0ec52a43eddb669d2853ae65a1dd0
                                <p className="header__info">Мое резюме</p>
                            </Link>
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
                            <Link to={"/register"}>
                                <p className="header__login">
                                    Войти
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header;